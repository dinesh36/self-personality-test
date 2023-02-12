import { getComponentWithReduxWrapper, getComponentWithReduxWrapperForReactTestingLib } from '@jestHelper/test-util';
import { fireEvent } from '@testing-library/react';
import * as redux from 'react-redux';
import Question from '../question';
import { IQuestion } from '../../shared/test.types';
import TEST_ACTIONS from '../../../../store/store/test/test.action-types';

const mockDispatch = jest.fn();

const state = {
  testState: {
    answers: {},
    currentQuestionIndex: 0,
    questions: [1],
  },
};
jest
  .spyOn(redux, 'useSelector')
  .mockImplementation((callback) => callback(state));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
}));

describe('Question Component', () => {
  const mockQuestionId = 123;
  const questionMock: IQuestion = {
    title: 'mock question',
    id: mockQuestionId,
    answerOptions: [
      {
        title: 'answer 1',
        id: 1,
        alphabet: 'B',
      },
      {
        title: 'answer 2',
        id: 2,
        alphabet: 'A',
      },
    ],
  };
  it('Should render the question component', () => {
    const component = getComponentWithReduxWrapper(<Question
      question={questionMock}
      submitTest={() => {}}
    />);
    const cmp = component.toJSON();

    expect(cmp).toMatchSnapshot();
  });

  it('Should get the next question when clicking the next button', () => {
    const mockSubmitFn = jest.fn();
    const cmp = getComponentWithReduxWrapperForReactTestingLib(<Question
      question={questionMock}
      submitTest={mockSubmitFn}
    />);
    const buttonSelector = new RegExp('Finish Test', 'i');
    expect(cmp.queryByText(buttonSelector)).toBeTruthy();
    fireEvent.click(cmp.getByText(buttonSelector));
    expect(mockDispatch).toHaveBeenCalledWith({
      type: TEST_ACTIONS.UPDATE_ANSWER,
      questionId: mockQuestionId,
      answerOptionId: 1,
    });
    expect(mockSubmitFn).toHaveBeenCalled();
  });

  it('Should get the next question when clicking the next button', () => {
    state.testState.questions = [1, 2];
    const cmp = getComponentWithReduxWrapperForReactTestingLib(<Question
      question={questionMock}
      submitTest={() => {}}
    />);
    const buttonSelector = new RegExp('Next', 'i');
    expect(cmp.queryByText(buttonSelector)).toBeTruthy();
    fireEvent.click(cmp.getByText(buttonSelector));
    expect(mockDispatch).toHaveBeenCalledWith({
      type: TEST_ACTIONS.UPDATE_ANSWER,
      questionId: mockQuestionId,
      answerOptionId: 1,
    });
    expect(mockDispatch).toHaveBeenCalledWith({
      type: TEST_ACTIONS.UPDATE_CURRENT_QUESTION,
      newQuestionIndex: 1,
    });
  });

  it('Should get the previous question when clicking the previous button', () => {
    state.testState.questions = [1, 2];
    state.testState.currentQuestionIndex = 1;
    const cmp = getComponentWithReduxWrapperForReactTestingLib(<Question
      question={questionMock}
      submitTest={() => {}}
    />);
    const buttonSelector = new RegExp('Previous', 'i');
    expect(cmp.queryByText(buttonSelector)).toBeTruthy();
    fireEvent.click(cmp.getByText(buttonSelector));
    expect(mockDispatch).toHaveBeenCalledWith({
      type: TEST_ACTIONS.UPDATE_ANSWER,
      questionId: mockQuestionId,
      answerOptionId: 1,
    });
    expect(mockDispatch).toHaveBeenCalledWith({
      type: TEST_ACTIONS.UPDATE_CURRENT_QUESTION,
      newQuestionIndex: 0,
    });
  });
});
