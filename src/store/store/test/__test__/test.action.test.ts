import {
  clearTest,
  updateAnswer, updateCurrentQuestion, updateQuestions, updateResult,
} from '../test.action';
import { mockQuestions } from '../../../../modules/test/shared/test.services';
import TEST_ACTIONS from '../test.action-types';

describe('Test action', () => {
  it('Should return appropriate data on updateQuestions action call', () => {
    const returnObj = updateQuestions(mockQuestions);
    expect(JSON.stringify(returnObj)).toMatch(JSON.stringify({
      type: TEST_ACTIONS.UPDATE_QUESTIONS,
      questions: mockQuestions,
    }));
  });

  it('Should return appropriate data on updateCurrentQuestion action call', () => {
    const returnObj = updateCurrentQuestion(1);
    expect(JSON.stringify(returnObj)).toMatch(JSON.stringify({
      type: TEST_ACTIONS.UPDATE_CURRENT_QUESTION,
      newQuestionIndex: 1,
    }));
  });

  it('Should return appropriate data on updateAnswer action call', () => {
    const returnObj = updateAnswer({ questionId: 1, answerOptionId: 1 });
    expect(JSON.stringify(returnObj)).toMatch(JSON.stringify({
      type: TEST_ACTIONS.UPDATE_ANSWER,
      questionId: 1,
      answerOptionId: 1,
    }));
  });

  it('Should return appropriate data on updateResult action call', () => {
    const returnObj = updateResult('introvert');
    expect(JSON.stringify(returnObj)).toMatch(JSON.stringify({
      type: TEST_ACTIONS.UPDATE_RESULT,
      result: 'introvert',
    }));
  });

  it('Should return appropriate data on clearTest action call', () => {
    const returnObj = clearTest();
    expect(JSON.stringify(returnObj)).toMatch(JSON.stringify({
      type: TEST_ACTIONS.CLEAR_TEST,
    }));
  });
});
