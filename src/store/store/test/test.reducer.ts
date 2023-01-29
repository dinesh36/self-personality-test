import { cloneDeep } from 'lodash';
import TEST_ACTIONS from './test.action-types';
import { ITestState, IQuestion, IResult } from '../../../modules/test/shared/test.types';

const initialState: ITestState = {
  questions: [],
  currentQuestionIndex: 0,
  isCompleted: false,
  result: '',
  answers: {},
};

interface IActionArgs{
  type: string,
  questions?: Array<IQuestion>,
  newQuestionIndex?: number,
  questionId?: number,
  answerOptionId?: number,
  result: IResult
}

export default (state = cloneDeep(initialState), action: IActionArgs) => {
  switch (action.type) {
    case TEST_ACTIONS.UPDATE_QUESTIONS: {
      return {
        ...state,
        questions: action.questions,
      };
    }

    case TEST_ACTIONS.UPDATE_CURRENT_QUESTION: {
      return {
        ...state,
        currentQuestionIndex: action.newQuestionIndex,
      };
    }

    case TEST_ACTIONS.UPDATE_ANSWER: {
      // @ts-ignore
      const newAnswers = { ...state.answers, [action.questionId]: action.answerOptionId };
      return {
        ...state,
        answers: newAnswers,
      };
    }

    case TEST_ACTIONS.UPDATE_RESULT: {
      return {
        ...state,
        result: action.result,
      };
    }

    case TEST_ACTIONS.CLEAR_TEST: {
      return cloneDeep(initialState);
    }

    default:
      return state;
  }
};
