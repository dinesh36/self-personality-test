import { getComponentWithReduxWrapper } from '@jestHelper/test-util';
import Home from '../index';

it('Should render the home page', () => {
  const component = getComponentWithReduxWrapper(<Home />);
  const cmp = component.toJSON();

  expect(cmp).toMatchSnapshot();
});
