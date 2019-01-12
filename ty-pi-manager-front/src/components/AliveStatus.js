import React, { Component } from 'react';
import './AliveStatus.css';

const isAliveStyle = {
  backgroundColor: 'green'
};

const isNotAliveStyle = {
  backgroundColor: 'red'
};

class AliveBand extends Component {

  componentDidMount() {
    this.props.initHandler();
  }

  render() {
    let style = this.props.isAlive ? isAliveStyle : isNotAliveStyle;
    return (
      <div className="alive">
        <div className="alive-rounded" style={style}>
        </div>
      </div>
    );
  }
}

export default AliveBand;
