import { getComponentWithReduxWrapper } from '@jestHelper/test-util';
import Home from '../index';

it('changes the class when hovered', () => {
  const component = getComponentWithReduxWrapper(<Home />);
  const cmp = component.toJSON();

  expect(cmp).toMatchSnapshot();
});
