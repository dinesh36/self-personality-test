import { getComponentWithReduxWrapper, getComponentWithReduxWrapperForReactTestingLib } from '@jestHelper/test-util';
import { fireEvent } from '@testing-library/react';
import Result from '../result';

const mockSelector = jest.fn();
const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: () => mockSelector(),
  useDispatch: () => mockDispatch,
}));

describe('Result Component', () => {
  beforeEach(() => {
    mockSelector.mockReturnValue('');
  });

  it('Should render the blank component when the result is not there', () => {
    const component = getComponentWithReduxWrapper(<Result />);
    const cmp = component.toJSON();

    expect(cmp).toMatchSnapshot();
  });
});

describe('Result Component', () => {
  beforeEach(() => {
    mockSelector.mockReturnValue('introvert');
  });

  it('Should render the blank component when the result is not there', () => {
    const component = getComponentWithReduxWrapper(<Result />);
    const cmp = component.toJSON();

    expect(cmp).toMatchSnapshot();
  });

  it('should show the introvert result', () => {
    const cmp = getComponentWithReduxWrapperForReactTestingLib(<Result />);
    const buttonSelector = new RegExp('Retake Test', 'i');
    expect(cmp.queryByText(buttonSelector)).toBeTruthy();
    fireEvent.click(cmp.getByText(buttonSelector));
    expect(mockDispatch).toBeCalled();
  });
});
