import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from './Home';
import Friends from './Friends';

import Authentication from './Authentication';

const AppNavigator = createStackNavigator({
  Authentication: { screen: Authentication },
  Home: { screen: Home },
  Friends: { screen: Friends},
});

export default createAppContainer(AppNavigator);