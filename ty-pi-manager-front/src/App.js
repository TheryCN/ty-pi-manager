import React, { Component } from 'react';
import './App.css';

import { MuiThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import theme from './theme.js';
import Background from './images/nier_automata_min_color_back.png';

import Box from './components/Box';
import Notification from './containers/Notification';
import AliveStatus from './containers/AliveStatus';
import Shutdown from './containers/Shutdown';
import Restart from './containers/Restart';
import SettingsForm from './containers/SettingsForm';

const backgroundStyle = {
  background: 'url(' + Background + ') no-repeat fixed center',
  backgroundSize: 'contain'
};

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <AliveStatus />
          <div className="header-container">
            <div className="header" />
          </div>
          <div className="App-content" style={backgroundStyle}>
            <div className="app-title">SETTINGS</div>
            <Grid container>
              <Grid item xs={12} md={2}>
                <Shutdown />
                <Restart />
              </Grid>
              <Grid item xs={12} md={5}>
                <Box name="Notifications">
                  <Notification />
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <Box name="App Settings">
                  <SettingsForm />
                </Box>
              </Grid>
            </Grid>
          </div>
          <div className="bottom-container">
            <div className="bottom" />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
