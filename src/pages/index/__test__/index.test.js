import Taro from '@tarojs/taro';
import renderer from 'react-test-renderer';
import Index from '../index';

test('Link changes the class when hovered', () => {
  const component = renderer.create(<Index />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
