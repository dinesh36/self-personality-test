import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styles from './result.module.scss';
import Button from '../../shared/components/button/button';
import { updateTitle } from '../../../store/store/layout/layout.action';
import { clearTest } from '../../../store/store/test/test.action';
import { IRootStore } from '../../../store/store/store.type';

const introvertResult = {
  title: 'introvert',
  text: 'You feel that living alone is to live happily, and you prefer hiding in a crowd rather than standing out in one. You are perpetually tormented by the idea of doing things wrong, not understanding or not being alert enough or intelligent enough to do what others expect of you. You lack in self-confidence and you seem to believe that others are better than you. While in a conversation, for example, you would be more likely to go.',
};

const extrovertResult = {
  title: 'extrovert',
  text: 'Extroverts tend to be quite outgoing and talkative. They enjoy spending time with other people, and feel energized in social situations. Oftentimes, extroverts like being the focus of attention. As an extrovert, people probably describe you as friendly and outgoing.',
};

const Result = () => {
  const resultRedux = useSelector((state: IRootStore) => state.testState.result);
  const result = resultRedux === 'introvert' ? introvertResult : extrovertResult;
  const router = useRouter();

  const renderResultImage = () => <img src={`images/result/${result.title}.png`} className={styles.resultText} alt={result.title} />;
  const dispatch = useDispatch();
  dispatch(updateTitle('Your Result'));

  const renderResultText = () => (
    <div className={styles.resultText}>
      <div className={styles.subTitle}>
        You are more of an
        {' '}
        {result.title}
      </div>
      {result.text}
    </div>
  );

  const retakeTest = () => {
    dispatch(clearTest());
  };

  const renderRetakeTestButton = () => (
    <Button className={styles.retakeTestButton} type="primary" onClick={retakeTest}>
      Retake Test
    </Button>
  );

  useEffect(() => {
    if (!resultRedux) {
      router.push('/test');
    }
  }, [resultRedux]);

  if (!resultRedux) {
    return null;
  }

  return (
    <div className={styles.result}>
      <div className={styles.resultMediaContainer}>
        {renderResultImage()}
        {renderResultText()}
      </div>
      {renderRetakeTestButton()}
    </div>
  );
};

export default Result;
