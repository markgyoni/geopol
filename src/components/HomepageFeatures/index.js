import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import factionsPNG from '@site/static/img/factions.png';
import weaponsPNG from '@site/static/img/weaponsv3.png';
import communitygeopolPNG from '@site/static/img/communitygeopol.png';
const FeatureList = [
  {
    title: 'Factions',
    img: factionsPNG,
    description: (
      <>
        Join one of the many, player made factions on the server! 
      </>
    ),
  },
  {
    title: 'Weapons',
    img: weaponsPNG,
    description: (
      <>
        Fight battles with HD quality guns from the MWC mod!
      </>
    ),
  },
  {
    title: 'Growing Community',
    img: communitygeopolPNG,
    description: (
      <>
        Make your voice heard, suggest new features or advertise your faction!
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
