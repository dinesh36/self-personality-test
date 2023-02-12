import { getComponentWithReduxWrapper } from '@jestHelper/test-util';
import Result from '../result';

it('changes the class when hovered', () => {
  const component = getComponentWithReduxWrapper(<Result />);
  const cmp = component.toJSON();

  expect(cmp).toMatchSnapshot();
});
