import ReactPagination from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import ReactHighlight from 'react-highlight';
import './assets/style.scss';

class App extends React.Component {
  constructor(inProps) {
    super(inProps);
    this.state = {
      value: 1
    };
    this._value = null;
  }

  _onChange = (inEvent) => {
    const { value } = inEvent.target;
    console.log('value:->', value);
  };

  _onValueChange = (inEvent) => {
    const { value } = inEvent.target;
    this._value = parseInt(value);
  };

  _onClick = (inEvent) => {
    console.log('this._value', this._value);
    this.setState({
      value: this._value
    });
  };

  render() {
    return (
      <div className="app-container">
        <div className="row">
          <label htmlFor="tst">ChangePage</label>
          <input type="text" name="" id="tst" onChange={this._onValueChange} />
          <button className="button" onClick={this._onClick}>
            Change
          </button>
        </div>
        <ReactPagination value={this.state.value} onChange={this._onChange} />
        <ReactHighlight lang="js">
          {require('!!raw-loader!./index.js').default}
        </ReactHighlight>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
