import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Container } from 'native-base';

class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View>
        <Text>Home</Text>
        <Button>
          <Text>Home Button</Text>
        </Button>
        <Button
          onPress={() => this.props.navigation.navigate('NearbyHotspots')}
        >
          <Text>Nearby Hotspots</Text>
        </Button>
      </View>
    );
  }
}

export default Home;
