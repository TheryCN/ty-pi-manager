import React, { Component } from 'react';
import './App.css';

import { MuiThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import theme from './theme.js';
import Background from './images/nier_automata_min_color_back.png';

import Box from './components/Box';
import Notification from './containers/Notification';
import AliveBand from './containers/AliveBand';
import Shutdown from './containers/Shutdown';
import Restart from './containers/Restart';
import SettingsForm from './containers/SettingsForm';

const backgroundStyle = {
  background: 'url(' + Background + ') no-repeat fixed center',
  backgroundSize: 'contain',
  backgroundColor: 'rgb(202, 195, 171)'
};

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <AliveBand />
          <div className="App-content" style={backgroundStyle}>
            <Grid container>
              <Grid item xs={2} className="center">
                <Box name="Basic commands">
                  <Shutdown />
                  <Restart />
                </Box>
              </Grid>
              <Grid item xs={5}>
                <Box name="Notifications">
                  <Notification />
                </Box>
              </Grid>
              <Grid item xs={5}>
                <Box name="App Settings">
                  <SettingsForm />
                </Box>
              </Grid>
            </Grid>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
