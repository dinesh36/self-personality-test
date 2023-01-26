import styles from './test.module.scss';
import Question from "../question/question";


const Test = () => {
    return (
        <div className={styles.test}>
            <Question />
        </div>
    )
}

export default Test
