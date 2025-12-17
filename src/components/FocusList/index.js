import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const ForcusList = [
  {
    title: 'Getting Good',
    emoji: '💻',
    description: (
      <>
        I aim to become a tech lead. Constantly trying to challenge myself and improve my technical skills.
      </>
    ),
  },
  {
    title: 'Writing about Tech',
    emoji: '✍️',
    description: (
      <>
        Attempting to build a hobby to write about tech and contribute back to the Internet!
      </>
    ),
  },
  {
    title: 'Building a mobile app',
    emoji: '📱',
    description: (
      <>
        I've worked with web applications for the most part of my career. Tinkering with mobile app dev. Hope to publish an app on the App Store!
      </>
    ),
  },
];

function FocusItem({ emoji, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
        <span style={{ fontSize: '4rem', display: 'block', marginBottom: '1rem' }}>
          {emoji}
        </span>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function FocusList() {
  return (
    <section className={styles.features}>
      <div className="container">
        <Heading as='h3' className="text--center">Focusing on...</Heading>
        <div className="row">
          {ForcusList.map((props, idx) => (
            <FocusItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
