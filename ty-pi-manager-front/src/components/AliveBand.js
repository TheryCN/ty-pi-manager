import React, { Component } from 'react';

const isAliveStyle = {
  backgroundColor: 'green',
  width: '100%',
  height: '3px'
};

const isNotAliveStyle = {
  backgroundColor: 'red',
  width: '100%',
  height: '3px'
};

class AliveBand extends Component {

  componentDidMount() {
    this.props.initHandler();
  }

  render() {
    let style = this.props.isAlive ? isAliveStyle : isNotAliveStyle;
    return (
      <div style={style}>
      </div>
    );
  }
}

export default AliveBand;
