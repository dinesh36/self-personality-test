import { getComponentWithReduxWrapper } from '@jestHelper/test-util';
import Result from '../result';

const mockSelector = jest.fn().mockReturnValue({ state: { testState: { result: '' } } });

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: () => mockSelector,
}));

describe('Result Component', () => {
  it('Should render the blank component when the result is not there', () => {
    const component = getComponentWithReduxWrapper(<Result />);
    const cmp = component.toJSON();

    expect(cmp).toMatchSnapshot();
  });

  it('should show the introvert result', () => {
    mockSelector.mockReturnValue({ state: { testState: { result: 'introvert' } } });
    const component = getComponentWithReduxWrapper(<Result />);
    const cmp = component.toJSON();

    expect(cmp).toMatchSnapshot();
  });
});
