import React, { Component } from 'react';
import Movies from './Movies';
import Confirmation from './Confirmation';
import { Router, Scene } from 'react-native-router-flux'


export default class Routes extends Component {
  render() {
      return (
          <Router uriPrefix={'MovieTickets'}>
              <Scene key="root" hideNavBar>
                  <Scene key='Movies' component={Movies} />
                  <Scene key='Confirmation' component={Confirmation} />
              </Scene>
          </Router>
      );
  }
}
