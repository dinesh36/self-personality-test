import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../shared/components/card/card';
import styles from './question.module.scss';
import Button from '../../shared/components/button/button';
import { IAnswerOption, IQuestion } from '../shared/test.types';
import { IRootStore } from '../../../store/store/store.type';
import { updateAnswer, updateCurrentQuestion } from '../../../store/store/test/test.action';

const Question = ({ question, submitTest }: {question: IQuestion, submitTest: ()=>void}) => {
  const [selectedAnswerId, setSelectedAnswerId] = useState(1);
  const answers = useSelector(
    (state: IRootStore) => state.testState.answers,
  );
  const currentQuestionIndex = useSelector(
    (state: IRootStore) => state.testState.currentQuestionIndex,
  );
  const totalQuestionsLength = useSelector(
    (state: IRootStore) => state.testState.questions.length,
  );

  const dispatch = useDispatch();
  const renderQuestionTitle = () => (
    <div className={styles.questionTitle}>
      {question.title}
    </div>
  );

  useEffect(() => {
    setSelectedAnswerId(answers[question.id] || 1);
  }, [question.id]);

  const renderAnswerOptions = () => {
    const { answerOptions } = question;
    return (
      <div className={styles.answerOptions}>
        {answerOptions.map((answerOption: IAnswerOption) => (
          // eslint-disable-next-line max-len
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
          <div
            onClick={() => setSelectedAnswerId(answerOption.id)}
            className={`${styles.answerOption} ${selectedAnswerId === answerOption.id ? styles.selected : ''}`}
            key={answerOption.id}
          >
            <span>
              {answerOption.alphabet}
              . &nbsp;
              {answerOption.title}
            </span>
            {selectedAnswerId === answerOption.id
              ? <img src="images/test/selected-icon.svg" alt="selected icon" /> : null}
          </div>
        ))}
      </div>
    );
  };

  const gotoNextQuestion = () => {
    dispatch(updateAnswer({ questionId: question.id, answerOptionId: selectedAnswerId }));
    if (currentQuestionIndex === totalQuestionsLength - 1) {
      submitTest();
      return;
    }
    dispatch(updateCurrentQuestion(currentQuestionIndex + 1));
  };

  const gotoPreviousQuestion = () => {
    dispatch(updateAnswer({ questionId: question.id, answerOptionId: selectedAnswerId }));
    dispatch(updateCurrentQuestion(currentQuestionIndex - 1));
  };

  const renderNextPreviousButtons = () => (
    <div className={styles.buttonContainer}>
      {currentQuestionIndex === 0 ? null : <Button type="default" onClick={gotoPreviousQuestion}>Previous</Button>}
      <Button type="primary" onClick={gotoNextQuestion}>{currentQuestionIndex === totalQuestionsLength - 1 ? 'Finish Test' : 'Next'}</Button>
    </div>
  );

  return (
    <Card className={styles.question}>
      {renderQuestionTitle()}
      {renderAnswerOptions()}
      {renderNextPreviousButtons()}
    </Card>
  );
};

export default Question;
