import React, { Component } from 'react';
import './App.css';

import { MuiThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import theme from './theme.js';

import Box from './components/Box';
import Notification from './containers/Notification';
import AliveBand from './containers/AliveBand';
import Shutdown from './containers/Shutdown';
import Restart from './containers/Restart';
import SettingsForm from './containers/SettingsForm';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Notification />
        <div className="App">
          <AliveBand />
          <div className="App-content">
            <Grid container>

              <Grid item xs={6}>
                <Box name="START">
                  <Shutdown />
                  <Restart />
                </Box>
              </Grid>

              <Grid item xs={6}>
                <Box name="SETTINGS">
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
