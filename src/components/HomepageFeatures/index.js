import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import factionsPNG from '@site/static/img/factions.png';
import weaponsPNG from '@site/static/img/weaponsv3.png';
import communityPNG from '@site/static/img/communitygeopol.png';
const FeatureList = [
  {
    title: 'Factions',
    img: factionsPNG,
    url: 'https://docs.geopolmc.org/docs/Getting_Started/Factions',
    description: (
      <>
        Join one of the many, player made factions on the server! 
      </>
    ),
  },
  {
    title: 'Weapons',
    img: weaponsPNG,
    url: 'https://docs.geopolmc.org/docs/Mods/vicsmodernwarfare',
    description: (
      <>
        Fight battles with HD quality guns from the VMW mod!
      </>
    ),
  },
  {
    title: 'Growing Community',
    img: communityPNG,
    url: 'http://docs.geopolmc.org/docs/Getting_Started/Community',
    description: (
      <>
        Make your voice heard, suggest new features or advertise your faction!
      </>
    ),
  },
];

function Feature({img, title, description, url}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={url}>
        <img src={img}/>
        </a>
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
