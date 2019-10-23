import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

const CLASS_NAME = 'react-pagination';

export default class extends Component {
  static displayName = CLASS_NAME;

  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.number,
    size: PropTypes.number,
    total: PropTypes.number,
    onChange: PropTypes.func
  };

  static defaultProps = {
    size: 10,
    value: 1,
    total: 108,
    onChange: noop
  };
  /*===properties end===*/

  constructor(inProps) {
    super(inProps);
    this.state = {
      value: inProps.value
    };
  }

  get page() {
    const { size, total } = this.props;
    return Math.ceil(total / size);
  }

  isBoundary(inValue) {
    return inValue <= 0 || inValue > this.page;
  }

  change(inValue) {
    const { onChange } = this.props;
    const _value = parseInt(inValue);
    if (!this.isBoundary(_value)) {
      const target = { value: _value };
      this.setState(target, () => {
        onChange({ target });
      });
    }
  }

  _toPage = (inEvent) => {
    const { value } = inEvent.target.dataset;
    this.change(value);
  };

  _toPrevious = (inEvent) => {
    const { value } = this.state;
    const _value = value - 1;
    this.change(_value);
  };

  _toNext = (inEvent) => {
    const { value } = this.state;
    const _value = value + 1;
    this.change(_value);
  };

  shouldComponentUpdate(inNextProps, inNextState) {
    const { value: nextValue } = inNextProps;
    const { value: propsValue } = this.props;
    const { value } = this.state;
    if (nextValue !== propsValue && nextValue !== value) {
      this.change(nextValue);
    }
    return value !== inNextState.value;
  }

  render() {
    const { className, total, ...props } = this.props;
    const _value = this.state.value;

    return (
      <nav
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        {...props}>
        <div className={`${CLASS_NAME}__actions`}>
          <button
            onClick={this._toPage}
            data-value={1}
            disabled={1 === _value}
            className="is-first">
            &lt;&lt; First
          </button>
          <button
            disabled={1 === _value}
            onClick={this._toPrevious}
            className="is-previous">
            &lt; Previous
          </button>
          <button
            disabled={this.page === _value}
            onClick={this._toNext}
            className="is-next">
            Next &gt;
          </button>
          <button
            onClick={this._toPage}
            data-value={this.page}
            disabled={this.page === _value}
            className="is-last">
            Last &gt;&gt;
          </button>
        </div>
        <div className={`${CLASS_NAME}__statistics`}>
          Pages: {_value} / {this.page}
        </div>
      </nav>
    );
  }
}
