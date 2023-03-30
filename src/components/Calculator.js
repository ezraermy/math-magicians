import { React, useState } from 'react';
import Quotes from './quotes';
import Title from './title';
import calculate from '../logic/calculate';
import Button from './button';
import './css/styles.css';

const MyCalc = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    const newState = calculate(state, buttonName);
    setState(newState);
  };

  return (
    <div className="frame">
      <Title />
      <div className="input"><input type="text" value={state.next || state.total || '0'} readOnly /></div>
      <div className="buttons">
        <Button label="AC" onClick={() => handleClick('AC')} />
        <Button label="+/-" onClick={() => handleClick('+/-')} />
        <Button label="%" onClick={() => handleClick('%')} />
        <Button label="÷" onClick={() => handleClick('÷')} className="divide" />
      </div>
      <div className="buttons">
        <Button label="7" onClick={() => handleClick('7')} />
        <Button label="8" onClick={() => handleClick('8')} />
        <Button label="9" onClick={() => handleClick('9')} />
        <Button label="×" onClick={() => handleClick('×')} className="mul" />
      </div>
      <div className="buttons">
        <Button label="4" onClick={() => handleClick('4')} />
        <Button label="5" onClick={() => handleClick('5')} />
        <Button label="6" onClick={() => handleClick('6')} />
        <Button label="-" onClick={() => handleClick('-')} className="minus" />
      </div>
      <div className="buttons">
        <Button label="1" onClick={() => handleClick('1')} />
        <Button label="2" onClick={() => handleClick('2')} />
        <Button label="3" onClick={() => handleClick('3')} />
        <Button label="+" onClick={() => handleClick('+')} className="plus" />
      </div>
      <div className="buttons">
        <Button label="0" onClick={() => handleClick('0')} className="zero" />
        <Button label="." onClick={() => handleClick('.')} />
        <Button label="=" onClick={() => handleClick('=')} className="equals" />
      </div>
      <Quotes />
    </div>

  );
};

export default MyCalc;
