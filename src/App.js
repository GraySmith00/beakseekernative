import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Container, Content, Footer, FooterTab } from 'native-base';

import GSHeader from './components/GSHeader/GSHeader';
import GSFooter from './components/GSFooter/GSFooter';

import { getPosition } from './utils/apiCalls';

export default class App extends Component {
  state = {
    latitude: '',
    longitude: '',
  };

  async componentDidMount() {
    const { latitude, longitude } = await getPosition();
    this.setState({ latitude, longitude });
  }

  render() {
    console.log(this.state);
    return (
      <Container>
        <GSHeader />
        <Content>
          <Button primary>
            <Text> Primary </Text>
          </Button>
        </Content>
        <GSFooter />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
