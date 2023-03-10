import Link from 'next/link';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useDispatch } from 'react-redux';
import styles from './home.module.scss';
import Button from '../shared/components/button/button';
import Card from '../shared/components/card/card';
import { updateTitle } from '../../store/store/layout/layout.action';

function Home() {
  const dispatch = useDispatch();
  dispatch(updateTitle('Test your personality'));

  return (
    <div className={styles.home}>
      <img className={styles.homeImage} src="images/app-logo.png" alt="logo" />
      <Card>
        <div className={styles.subTitle}>
          <img src="images/home/note.svg" alt="note" />
          Are you an introvert or an extrovert?
        </div>
        <p>
          These two personality types are opposites — introverts focus inward,
          into their own thoughts, and extroverts focus outward, into the world.
          But don&apos;t get too excited; most people are a little bit of both.
          Do you want to know what kind of person you are ? Let&apos;s Check
        </p>
        <Link href="/test">
          <Button type="primary" className={styles.startButton}>
            Start Test
          </Button>
        </Link>
      </Card>
    </div>
  );
}

export default Home;
