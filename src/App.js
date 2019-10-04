import React, { Component } from 'react';
import './App.css';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { ClearButton } from './components/ClearButton';
import * as math from 'mathjs';
import { unregisterDecorator } from 'handlebars';

class App extends Component {
  constructor(props) {
    /* Have to call super because extending component class */
    super(props);
    this.state = {
      input: ''
    };
  }

  // Reminder: public class fields syntax. See https://tylermcginnis.com/javascript-private-and-public-class-fields/. Fat arrow functions bind the this variable inside the function call to the this variable of the scope of where the function was defined. So in this case, this would be bound to the current class instance
  addToInput = val => {
    // Concatenating onto input with string value from whichever button was clicked
    this.setState({ input: this.state.input + val });
  };

  handleEqualsSign = () => {
    this.setState({ input: math.evaluate(this.state.input) });
  };

  // Using this so a middle dot can be used, which is perfectly vertically aligned, unlike period
  handleDecimalPoint = () => {
    this.setState({ input: this.state.input + '.' });
  };

  // Using this so a division symbol can be used
  handleDivisionSymbol = () => {
    this.setState({ input: this.state.input + '/' });
  };

  // Using this so a multiplication symbol can be used
  handleMultiplicationSymbol = () => {
    this.setState({ input: this.state.input + '*' });
  };

  // Using this so a minus sign can be used instead of a hyphen
  handleMinusSign = () => {
    this.setState({ input: this.state.input + '-' });
  };

  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <Input input={this.state.input}></Input>
          <div className="row">
            {/* Multi-line edit with Ctrl + D */}
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={() => this.handleDivisionSymbol()}>÷</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={() => this.handleMultiplicationSymbol()}>×</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={() => this.handleMinusSign()}>−</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={() => this.handleDecimalPoint()}>·</Button>
            <Button handleClick={() => this.handleEqualsSign()}>=</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </div>
          <div className="row">
            {/* Inline functions create a new function on every render; potential performance hit */}
            <ClearButton handleClear={() => this.setState({ input: '' })}>
              Clear
            </ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
