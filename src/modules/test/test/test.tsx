import { useDispatch } from 'react-redux';
import styles from './test.module.scss';
import Question from '../question/question';
import { updateTitle } from '../../../store/store/layout/layout.action';

const Test = () => {
  const dispatch = useDispatch();
  dispatch(updateTitle('Check your personality'));

  return (
    <div className={styles.test}>
      <Question />
    </div>
  );
};

export default Test;
