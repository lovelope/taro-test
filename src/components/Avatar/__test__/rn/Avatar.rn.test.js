import Taro from '@tarojs/taro';
import renderer from 'react-test-renderer';

import Avatar from '../..';

test('renders correctly', () => {
  const tree = renderer.create(<Avatar />).toJSON();
  expect(tree).toMatchSnapshot();
});
