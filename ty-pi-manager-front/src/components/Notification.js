import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

import './Notification.css';

class Notification extends Component {


  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    this.afterNotifications.scrollIntoView({ behavior: "smooth" });
  }
  
  render() {
    const messages = this.props.messages.map((message, id) => <Typography key={id}>{message}</Typography>);
    return (
      <div className="notification">
        {messages}
        <div ref={(node) => { this.afterNotifications = node; }} />
      </div>
    );
  }
}

export default Notification;
