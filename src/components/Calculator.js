import React from 'react';
import Button from './button';
import Result from './result';
import './css/styles.css';

const MyCalc = () => (
  <div className="frame">
    <Result />
    <div className="autput">
      <div className="buttons">
        <Button label="AC" />
        <Button label="+/-" />
        <Button label="%" />
        <Button label="/" className="divide" />
      </div>
      <div className="buttons">
        <Button label="7" />
        <Button label="8" />
        <Button label="9" />
        <Button label="*" className="dot" />
      </div>
      <div className="buttons">
        <Button label="4" />
        <Button label="5" />
        <Button label="6" />
        <Button label="-" className="minus" />
      </div>
      <div className="buttons">
        <Button label="1" />
        <Button label="2" />
        <Button label="3" />
        <Button label="+" className="plus" />
      </div>
      <div className="buttons">
        <Button label="0" className="zero" />
        <Button label="." />
        <Button label="=" className="equals" />
      </div>
    </div>
  </div>
);

export default MyCalc;
