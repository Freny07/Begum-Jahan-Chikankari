/**
 * Shopify Storefront API Client
 * 
 * Configure SHOPIFY_STORE_DOMAIN and SHOPIFY_STOREFRONT_TOKEN
 * in your .env.local file.
 */

const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || '';
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN || '';

const SHOPIFY_GRAPHQL_URL = `https://${domain}/api/2024-01/graphql.json`;

async function shopifyFetch(query, variables = {}) {
  if (!domain || !storefrontAccessToken) {
    console.warn('Shopify credentials not configured. Using mock data.');
    return null;
  }

  try {
    const response = await fetch(SHOPIFY_GRAPHQL_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
      },
      body: JSON.stringify({ query, variables }),
    });

    if (!response.ok) {
      throw new Error(`Shopify API error: ${response.status}`);
    }

    const json = await response.json();

    if (json.errors) {
      console.error('Shopify GraphQL errors:', json.errors);
      throw new Error(json.errors[0]?.message || 'GraphQL error');
    }

    return json.data;
  } catch (error) {
    console.error('Shopify fetch error:', error);
    return null;
  }
}

/* -------------------------------------------------------
   Product Queries
   ------------------------------------------------------- */

const PRODUCT_CARD_FRAGMENT = `
  fragment ProductCard on Product {
    id
    title
    handle
    productType
    tags
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    compareAtPriceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 2) {
      edges {
        node {
          url
          altText
          width
          height
        }
      }
    }
    variants(first: 1) {
      edges {
        node {
          id
          availableForSale
        }
      }
    }
  }
`;

const FULL_PRODUCT_FRAGMENT = `
  fragment FullProduct on Product {
    id
    title
    handle
    description
    descriptionHtml
    productType
    tags
    vendor
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    compareAtPriceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 10) {
      edges {
        node {
          url
          altText
          width
          height
        }
      }
    }
    variants(first: 50) {
      edges {
        node {
          id
          title
          availableForSale
          price {
            amount
            currencyCode
          }
          compareAtPrice {
            amount
            currencyCode
          }
          selectedOptions {
            name
            value
          }
          image {
            url
            altText
          }
        }
      }
    }
    options {
      id
      name
      values
    }
  }
`;

export async function getProducts(first = 20, query = '') {
  const gql = `
    ${PRODUCT_CARD_FRAGMENT}
    query GetProducts($first: Int!, $query: String) {
      products(first: $first, query: $query, sortKey: CREATED_AT, reverse: true) {
        edges {
          node {
            ...ProductCard
          }
        }
      }
    }
  `;

  const data = await shopifyFetch(gql, { first, query });
  if (!data) return [];
  return data.products.edges.map((edge) => flattenProduct(edge.node));
}

export async function getProduct(handle) {
  const gql = `
    ${FULL_PRODUCT_FRAGMENT}
    query GetProduct($handle: String!) {
      product(handle: $handle) {
        ...FullProduct
      }
    }
  `;

  const data = await shopifyFetch(gql, { handle });
  if (!data?.product) return null;
  return flattenFullProduct(data.product);
}

export async function getCollections() {
  const gql = `
    query GetCollections {
      collections(first: 20) {
        edges {
          node {
            id
            title
            handle
            description
            image {
              url
              altText
            }
          }
        }
      }
    }
  `;

  const data = await shopifyFetch(gql);
  if (!data) return [];
  return data.collections.edges.map((edge) => edge.node);
}

export async function getCollection(handle, first = 50, sortKey = 'CREATED', reverse = true) {
  const gql = `
    ${PRODUCT_CARD_FRAGMENT}
    query GetCollection($handle: String!, $first: Int!, $sortKey: ProductCollectionSortKeys, $reverse: Boolean) {
      collection(handle: $handle) {
        id
        title
        handle
        description
        image {
          url
          altText
        }
        products(first: $first, sortKey: $sortKey, reverse: $reverse) {
          edges {
            node {
              ...ProductCard
            }
          }
        }
      }
    }
  `;

  const data = await shopifyFetch(gql, { handle, first, sortKey, reverse });
  if (!data?.collection) return null;

  return {
    ...data.collection,
    products: data.collection.products.edges.map((edge) => flattenProduct(edge.node)),
  };
}

export async function searchProducts(searchQuery, first = 20) {
  const gql = `
    ${PRODUCT_CARD_FRAGMENT}
    query SearchProducts($query: String!, $first: Int!) {
      products(first: $first, query: $query) {
        edges {
          node {
            ...ProductCard
          }
        }
      }
    }
  `;

  const data = await shopifyFetch(gql, { query: searchQuery, first });
  if (!data) return [];
  return data.products.edges.map((edge) => flattenProduct(edge.node));
}

/* -------------------------------------------------------
   Checkout
   ------------------------------------------------------- */

export async function createCheckout(lineItems) {
  const gql = `
    mutation CreateCheckout($input: CheckoutCreateInput!) {
      checkoutCreate(input: $input) {
        checkout {
          id
          webUrl
        }
        checkoutUserErrors {
          code
          field
          message
        }
      }
    }
  `;

  const input = {
    lineItems: lineItems.map((item) => ({
      variantId: item.variantId,
      quantity: item.quantity,
    })),
  };

  const data = await shopifyFetch(gql, { input });
  if (!data?.checkoutCreate?.checkout) return null;
  return data.checkoutCreate.checkout;
}

/* -------------------------------------------------------
   Data Flatteners
   ------------------------------------------------------- */

function flattenProduct(product) {
  return {
    id: product.id,
    title: product.title,
    handle: product.handle,
    productType: product.productType,
    tags: product.tags,
    price: product.priceRange.minVariantPrice.amount,
    currency: product.priceRange.minVariantPrice.currencyCode,
    compareAtPrice: product.compareAtPriceRange?.minVariantPrice?.amount || null,
    images: product.images.edges.map((e) => e.node),
    availableForSale: product.variants.edges[0]?.node?.availableForSale ?? true,
  };
}

function flattenFullProduct(product) {
  return {
    id: product.id,
    title: product.title,
    handle: product.handle,
    description: product.description,
    descriptionHtml: product.descriptionHtml,
    productType: product.productType,
    tags: product.tags,
    vendor: product.vendor,
    price: product.priceRange.minVariantPrice.amount,
    currency: product.priceRange.minVariantPrice.currencyCode,
    compareAtPrice: product.compareAtPriceRange?.minVariantPrice?.amount || null,
    images: product.images.edges.map((e) => e.node),
    variants: product.variants.edges.map((e) => ({
      id: e.node.id,
      title: e.node.title,
      availableForSale: e.node.availableForSale,
      price: e.node.price.amount,
      compareAtPrice: e.node.compareAtPrice?.amount || null,
      selectedOptions: e.node.selectedOptions,
      image: e.node.image,
    })),
    options: product.options,
  };
}
