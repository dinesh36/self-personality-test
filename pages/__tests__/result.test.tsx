import Result from '../result';
import { getComponentWithReduxWrapper } from '../../jest/test-util';

it('changes the class when hovered', () => {
  const component = getComponentWithReduxWrapper(<Result />);
  const cmp = component.toJSON();

  expect(cmp).toMatchSnapshot();
});
