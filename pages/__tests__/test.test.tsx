import { getComponentWithReduxWrapper } from '@jestHelper/test-util';
import Test from '../test';

it('changes the class when hovered', () => {
  const component = getComponentWithReduxWrapper(<Test />);
  const cmp = component.toJSON();

  expect(cmp).toMatchSnapshot();
});
