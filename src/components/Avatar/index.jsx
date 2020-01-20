import Taro from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import './index.less';

export default function Avatar({ src, size, style }) {
  const computedStyle = {};
  switch (size) {
    case 'small':
      computedStyle.width = 20;
      computedStyle.height = 20;
      break;

    case 'big':
      computedStyle.width = 60;
      computedStyle.height = 60;
      break;

    default:
      computedStyle.width = 40;
      computedStyle.height = 40;
      break;
  }
  return (
    <View className='avatar_container'>
      <Image src={src} className='avatar' style={[computedStyle, style]} />
    </View>
  );
}
