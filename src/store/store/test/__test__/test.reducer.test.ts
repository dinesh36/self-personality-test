import testReducer, { initialState } from '../test.reducer';
import TEST_ACTIONS from '../test.action-types';
import { mockQuestions } from '../../../../modules/test/shared/test.services';

describe('Test reducer', () => {
  it('Should return initial state if no action type is found', () => {
    const returnObj = testReducer(initialState, { type: '' });
    expect(JSON.stringify(returnObj)).toMatch(JSON.stringify(initialState));
  });

  it('Should return appropriate state with UPDATE_QUESTIONS action', () => {
    const returnObj = testReducer(initialState, {
      type: TEST_ACTIONS.UPDATE_QUESTIONS,
      questions: mockQuestions,
    });
    expect(JSON.stringify(returnObj)).toMatch(JSON.stringify({
      ...initialState,
      questions: mockQuestions,
    }));
  });

  it('Should return appropriate state with UPDATE_CURRENT_QUESTION action', () => {
    const returnObj = testReducer(initialState, {
      type: TEST_ACTIONS.UPDATE_CURRENT_QUESTION,
      newQuestionIndex: 1,
    });
    expect(JSON.stringify(returnObj)).toMatch(JSON.stringify({
      ...initialState,
      currentQuestionIndex: 1,
    }));
  });

  it('Should return appropriate state with UPDATE_ANSWER action', () => {
    const returnObj = testReducer(initialState, {
      type: TEST_ACTIONS.UPDATE_ANSWER,
      questionId: 1,
      answerOptionId: 1,
    });
    expect(JSON.stringify(returnObj)).toMatch(JSON.stringify({
      ...initialState,
      answers: {
        1: 1,
      },
    }));
  });

  it('Should return appropriate state with UPDATE_RESULT action', () => {
    const returnObj = testReducer(initialState, {
      type: TEST_ACTIONS.UPDATE_RESULT,
      result: 'introvert',
    });
    expect(JSON.stringify(returnObj)).toMatch(JSON.stringify({
      ...initialState,
      result: 'introvert',
    }));
  });

  it('Should return appropriate state with CLEAR_TEST action', () => {
    const returnObj = testReducer(initialState, {
      type: TEST_ACTIONS.CLEAR_TEST,
    });
    expect(JSON.stringify(returnObj)).toMatch(JSON.stringify({
      ...initialState,
    }));
  });
});
