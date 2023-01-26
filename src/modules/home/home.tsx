import Link from 'next/link';
import styles from './home.module.scss';

function Home() {
    return <div className={styles.home}>
            <img src={'images/app-logo.png'}/>
            <Link href={'/result'}>
                <button>
                    Start Test
                </button>
            </Link>
    </div>
}

export default Home;
