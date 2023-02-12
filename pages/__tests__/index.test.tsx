import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Home from '../index';
import { getStore } from '../../src/store/store/store';

it('changes the class when hovered', () => {
  const store = getStore();
  const component = renderer.create(
    <Provider store={store}>
      <Home />
    </Provider>,
  );
  const cmp = component.toJSON();
  expect(cmp).toMatchSnapshot();
});
