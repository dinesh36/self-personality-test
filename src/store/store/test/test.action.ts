import { IQuestion } from '../../../modules/test/shared/test.types';
import TEST_ACTIONS from './test.action-types';

export const updateQuestions = (questions: Array<IQuestion>) => ({
  type: TEST_ACTIONS.UPDATE_QUESTIONS,
  questions,
});

export const updateCurrentQuestion = (newQuestionIndex: number) => ({
  type: TEST_ACTIONS.UPDATE_CURRENT_QUESTION,
  newQuestionIndex,
});

export const updateAnswer = ({ questionId, answerOptionId }:
{questionId: number, answerOptionId: number}) => ({
  type: TEST_ACTIONS.UPDATE_ANSWER,
  questionId,
  answerOptionId,
});

export const updateResult = (result: string) => ({
  type: TEST_ACTIONS.UPDATE_RESULT,
  result,
});

export const clearTest = () => ({
  type: TEST_ACTIONS.CLEAR_TEST,
});
