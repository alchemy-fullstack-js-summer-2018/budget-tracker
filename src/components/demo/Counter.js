import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { increment, decrement } from './actions';

class Counter extends PureComponent {

  static propTypes = {
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired
  };

  render() {
    const { count, increment, decrement } = this.props;

    return (
      <section>
        <button onClick={increment}>+</button>
        {count}
        <button onClick={decrement}>-</button>
      </section>
    );
  }
}

export default connect(
  state => ({
    count: state
  }),
  { increment, decrement }
)(Counter);