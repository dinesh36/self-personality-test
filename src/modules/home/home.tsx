import Link from 'next/link';
import styles from './home.module.scss';
import Button from "../shared/components/button/button";
import Card from "../shared/components/card/card";

function Home() {
    return <div className={styles.home}>
        <img className={styles.homeImage} src={'images/app-logo.png'}/>
        <Card>
            <div className={styles.subTitle}>
                <img src={'images/home/note.svg'}/>
                Are you an introvert or an extrovert?
            </div>
            <p>
                These two personality types are opposites — introverts focus inward, into their own thoughts, and extroverts focus outward, into the world.
                But don&apos;t get too excited; most people are a little bit of both.
                Do you want to know what kind of person you are ? Let&apos;s Check
            </p>
            <Link href={'/test'}>
                <Button type="primary">
                    Start Test
                </Button>
            </Link>
        </Card>
    </div>
}

export default Home;
