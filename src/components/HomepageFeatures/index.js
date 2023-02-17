import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Lets Understand Whats Veganism',
   
    Svg: '',
    description: (
      <>
        Lets understand each and every aspect related with veganism
        
      </>
    ),
  },
  {
    title: 'Delicious Vegan Food Recipes ',
    Svg: '',
    description: (
      <>
       Explore healthy , easy and tasty vegan recipes to 
        keep yourself healthy and lean new new things 
      </>
    ),
  },
  {
    title: 'Mystery Book Episodes',
    Svg: '',
    description: (
      <>
        Special things coming soon
     </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
