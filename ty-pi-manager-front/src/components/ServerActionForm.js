import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class ServerActionForm extends Component {

  render() {
    return (
      <div>
        <Button variant="contained" disabled={!this.props.isAlive} onClick={() => this.props.serverActionHandler()}>
          {this.props.name}
        </Button>
      </div>
    );
  }
}

export default ServerActionForm;
