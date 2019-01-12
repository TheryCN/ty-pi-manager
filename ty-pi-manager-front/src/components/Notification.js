import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

import './Notification.css';

class Notification extends Component {

  render() {
    const messages = this.props.messages.map((message, id) => <Typography key={id}>{message}</Typography>);
    return (
      <div className="notification">
        {messages}
      </div>
    );
  }
}

export default Notification;
