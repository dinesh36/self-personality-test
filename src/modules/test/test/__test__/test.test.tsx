import { getComponentWithReduxWrapper } from '@jestHelper/test-util';
import Test from '../test';

describe('Test Component', () => {
  it('Should render the test component', () => {
    const component = getComponentWithReduxWrapper(<Test />);
    const cmp = component.toJSON();

    expect(cmp).toMatchSnapshot();
  });
});
