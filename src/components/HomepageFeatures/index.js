import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import factionsPNG from '@site/static/img/factions.png';
import weaponsPNG from '@site/static/img/weaponsv3.png';
const FeatureList = [
  {
    title: 'Factions',
    img: factionsPNG,
    description: (
      <>
        Join one of the many growing factions on the server!
      </>
    ),
  },
  {
    title: 'Weapons',
    img: weaponsPNG,
    description: (
      <>
        placeholder
      </>
    ),
  },
  {
    title: 'Growing Community',
    img: factionsPNG,
    description: (
      <>
        placeholder
      </>
    ),
  },
];

function Feature({img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={img}/>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
