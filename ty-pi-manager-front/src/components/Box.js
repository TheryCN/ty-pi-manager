import React from 'react';
import './Box.css';

const Box = ({ children, name }) => (
  <div className="box">
    <div className="box-header">
      <span>{name}</span>
    </div>
    <div className="box-content">
      {children}
    </div>
  </div>
)

export default Box;
