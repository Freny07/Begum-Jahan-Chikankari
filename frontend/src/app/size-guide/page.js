import { SITE_NAME } from '@/lib/constants';
import styles from './sizeguide.module.css';

export const metadata = {
  title: `Size Guide | ${SITE_NAME}`,
  description: 'Find your perfect fit with our comprehensive size guide for Chikankari kurtas, anarkalis, sarees, and menswear.',
};

export default function SizeGuidePage() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Size Guide</h1>
        <p className={styles.subtitle}>
          All our pieces are crafted with generous, comfortable silhouettes.
          Use the charts below to find your perfect fit.
        </p>
      </div>

      <div className={styles.content}>
        {/* Women's Sizes */}
        <div className={styles.tableWrapper}>
          <h2 className={styles.tableTitle}>Women&apos;s Wear</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Size</th>
                <th>Bust (in)</th>
                <th>Waist (in)</th>
                <th>Hip (in)</th>
                <th>Length (in)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>XS</td><td>32</td><td>26</td><td>35</td><td>46</td></tr>
              <tr><td>S</td><td>34</td><td>28</td><td>37</td><td>47</td></tr>
              <tr><td>M</td><td>36</td><td>30</td><td>39</td><td>48</td></tr>
              <tr><td>L</td><td>38</td><td>32</td><td>41</td><td>49</td></tr>
              <tr><td>XL</td><td>40</td><td>34</td><td>43</td><td>50</td></tr>
              <tr><td>XXL</td><td>42</td><td>36</td><td>45</td><td>51</td></tr>
            </tbody>
          </table>
        </div>

        {/* Men's Sizes */}
        <div className={styles.tableWrapper}>
          <h2 className={styles.tableTitle}>Men&apos;s Wear</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Size</th>
                <th>Chest (in)</th>
                <th>Waist (in)</th>
                <th>Shoulder (in)</th>
                <th>Length (in)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>S</td><td>38</td><td>34</td><td>16.5</td><td>40</td></tr>
              <tr><td>M</td><td>40</td><td>36</td><td>17</td><td>41</td></tr>
              <tr><td>L</td><td>42</td><td>38</td><td>17.5</td><td>42</td></tr>
              <tr><td>XL</td><td>44</td><td>40</td><td>18</td><td>43</td></tr>
              <tr><td>XXL</td><td>46</td><td>42</td><td>18.5</td><td>44</td></tr>
            </tbody>
          </table>
        </div>

        {/* Tips */}
        <div className={styles.tips}>
          <h2 className={styles.tipsTitle}>How to Measure</h2>
          <ul className={styles.tipsList}>
            <li>Use a soft measuring tape and keep it snug but not tight against your body.</li>
            <li><strong>Bust / Chest:</strong> Measure around the fullest part of your chest, keeping the tape parallel to the floor.</li>
            <li><strong>Waist:</strong> Measure around the narrowest part of your natural waistline.</li>
            <li><strong>Hip:</strong> Measure around the widest part of your hips.</li>
            <li><strong>Length:</strong> Measure from the highest point of your shoulder to the desired hemline.</li>
            <li>If you fall between two sizes, we recommend sizing up for a more comfortable, flowy fit — especially for Anarkalis and Shararas.</li>
            <li>For custom sizing requests, please <a href="/contact" style={{ textDecoration: 'underline' }}>contact us</a>.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
