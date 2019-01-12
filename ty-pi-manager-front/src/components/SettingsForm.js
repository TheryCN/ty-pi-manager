import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class SettingsForm extends Component {

  constructor(props) {
    super(props);
    this.state = { app: "", settings : "{}" }
  }

  handleChange = name => event => {
    this.setState({ ...this.state, [name]: event.target.value });
  };

  render() {
    return (
      <div>
        <div>
          <TextField
            label="Application"
            value={this.state.app}
            fullWidth={true}
            onChange={this.handleChange('app')}
            margin="normal"
          />
        </div>

        <div>
          <TextField
            label="Settings JSON"
            multiline
            rows="10"
            value={this.state.settings}
            fullWidth={true}
            onChange={this.handleChange('settings')}
            margin="normal"
          />
        </div>

        <div>
          <Button variant="contained" disabled={!this.props.isAlive}
            onClick={() => this.props.saveSettingsHandler(this.state.app, JSON.parse(this.state.settings))}>
            Save
          </Button>
        </div>
      </div>
    );
  }
}

export default SettingsForm;
