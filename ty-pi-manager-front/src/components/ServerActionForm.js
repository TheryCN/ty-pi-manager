import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './ServerActionForm.css';

class ServerActionForm extends Component {

  render() {
    return (
      <div className="button">
        <Button variant="contained" disabled={!this.props.isAlive} onClick={() => this.props.serverActionHandler()}>
          {this.props.name}
        </Button>
      </div>
    );
  }
}

export default ServerActionForm;
