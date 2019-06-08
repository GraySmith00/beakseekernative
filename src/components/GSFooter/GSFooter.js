import React, { Component } from 'react';
import { Footer, FooterTab, Button, Text } from 'native-base';

class GSFooter extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button>
            <Text>Apps</Text>
          </Button>
          <Button>
            <Text>Camera</Text>
          </Button>
          <Button active>
            <Text>Navigate</Text>
          </Button>
          <Button>
            <Text>Contact</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

export default GSFooter;
