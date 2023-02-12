import { getComponentWithReduxWrapper } from '@jestHelper/test-util';
import Test from '../test';

it('Should render the test page', () => {
  const component = getComponentWithReduxWrapper(<Test />);
  const cmp = component.toJSON();

  expect(cmp).toMatchSnapshot();
});
