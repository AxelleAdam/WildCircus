import React from "react";

class Counter extends React.Component {
  state = { count: 0, calcul: 0 };

  increment = () => {
    this.setState({
      count: this.state.count + 1,
      calcul: this.state.calcul + this.state.count + 10
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
      calcul: this.state.calcul - this.state.count - 9
    });
  };

  render() {
    return (
      <div>
        <h2>Buying Tickets</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.state.count} ticket, </span>
          <span>{this.state.calcul} €</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

export default Counter;
