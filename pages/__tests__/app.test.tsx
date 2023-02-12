import renderer from 'react-test-renderer';
import { NextComponentType } from 'next';
import App from '../_app';

const NextCmp:NextComponentType = () => <div />;
it('changes the class when hovered', () => {
  const component = renderer.create(
    // @ts-ignore
    <App Component={NextCmp} pageProps={{ className: 'test' }} />,
  );
  const cmp = component.toJSON();

  expect(cmp).toMatchSnapshot();
});
