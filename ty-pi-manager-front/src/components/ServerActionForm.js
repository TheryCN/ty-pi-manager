import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './ServerActionForm.css';

class ServerActionForm extends Component {

  render() {
    return (
      <div className="button-container">
        <div className="button" variant="contained" disabled={!this.props.isAlive} onClick={() => this.props.serverActionHandler()}>
          {this.props.name}
        </div>
      </div>
    );
  }
}

export default ServerActionForm;
