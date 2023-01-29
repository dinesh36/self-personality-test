import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Spin } from 'antd';
import { useRouter } from 'next/router';
import styles from './test.module.scss';
import Question from '../question/question';
import { updateTitle } from '../../../store/store/layout/layout.action';
import { getAllQuestions, getTestResult } from '../shared/test.services';
import { updateQuestions, updateResult } from '../../../store/store/test/test.action';
import { IRootStore } from '../../../store/store/store.type';

const Test = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  dispatch(updateTitle('Check your personality'));
  const currentQuestionIndex = useSelector(
    (state: IRootStore) => state.testState.currentQuestionIndex,
  );
  const questions = useSelector((state: IRootStore) => state.testState.questions);
  const answers = useSelector((state: IRootStore) => state.testState.answers);
  const [isLoading, setIsLoading] = useState(true);

  const loadQuestions = async () => {
    try {
      if (questions.length) {
        return;
      }
      setIsLoading(true);
      const questionsResponse = await getAllQuestions();
      dispatch(updateQuestions(questionsResponse));
    } catch (e) {
      // TODO show the error here.
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadQuestions();
  }, []);

  const renderLoader = () => (
    <div className={styles.loadingContainer}>
      <Spin size="large" />
    </div>
  );

  const submitTest = async () => {
    try {
      setIsLoading(true);
      const result = await getTestResult(answers);
      dispatch(updateResult(result));
      router.push('/result');
    } catch (e) {
      // TODO show the error here.
    }
  };

  return (
    <div className={styles.test}>
      {isLoading ? renderLoader()
        : <Question question={questions[currentQuestionIndex]} submitTest={submitTest} />}
    </div>
  );
};

export default Test;
