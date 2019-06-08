import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../../screens/Home/Home';
import NearbyHotspots from '../../screens/NearbyHotspots/NearbyHotspots';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    NearbyHotspots: {
      screen: NearbyHotspots,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(AppNavigator);
