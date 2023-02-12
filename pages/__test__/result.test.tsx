import { getComponentWithReduxWrapper } from '@jestHelper/test-util';
import Result from '../result';

it('Should render the results page', () => {
  const component = getComponentWithReduxWrapper(<Result />);
  const cmp = component.toJSON();

  expect(cmp).toMatchSnapshot();
});
