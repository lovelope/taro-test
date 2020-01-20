import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import './index.less';
import Avatar from '../../components/Avatar';
import avatar from '../../assets/lovelope.png';

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config = {
    navigationBarTitleText: '首页'
  };

  render() {
    return (
      <View className='index'>
        <Text>Hello world!</Text>

        <Avatar src={avatar} size='big' />
      </View>
    );
  }
}
