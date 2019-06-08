// import React, { Component } from 'react';
// import { Footer, FooterTab, Button, Text } from 'native-base';

// class GSFooter extends Component {
//   render() {
//     return (
//       <Footer>
//         <FooterTab>
//           <Button onPress={() => this.props.navigation.push('Home')}>
//             <Text>Home</Text>
//           </Button>
//           <Button onPress={() => this.props.navigation.push('NearbyHotspots')}>
//             <Text>Nearby</Text>
//           </Button>
//           <Button active>
//             <Text>Navigate</Text>
//           </Button>
//           <Button>
//             <Text>Contact</Text>
//           </Button>
//         </FooterTab>
//       </Footer>
//     );
//   }
// }

// export default GSFooter;

import Home from '../../screens/Home/Home';
import NearbyHotspots from '../../screens/NearbyHotspots/NearbyHotspots';

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

const GSFooter = createBottomTabNavigator(
  {
    Home,
    NearbyHotspots,
  },
  {
    // defaultNavigationOptions: ({ navigation }) => ({
    //   tabBarIcon: ({ focused, horizontal, tintColor }) => {
    //     const { routeName } = navigation.state;
    //     let IconComponent = Icon;
    //     let iconName;
    //     if (routeName === 'Home') {
    //       iconName = `ios-information-circle${focused ? '' : '-outline'}`;
    //       // Sometimes we want to add badges to some icons.
    //       // You can check the implementation below.
    //       IconComponent = HomeIconWithBadge;
    //     } else if (routeName === 'Settings') {
    //       iconName = `ios-options`;
    //     }

    //     // You can return any component that you like here!
    //     return <IconComponent name={iconName} size={25} color={tintColor} />;
    //   },
    // }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

export default createAppContainer(GSFooter);
