import { getComponentWithReduxWrapper } from '@jestHelper/test-util';
import Question from '../question';
import { IQuestion } from '../../shared/test.types';

describe('Question Component', () => {
  const questionMock: IQuestion = {
    title: 'mock question',
    id: 123,
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
});
