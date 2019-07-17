import React from "react";
import "./Tickets.css";

class Counter extends React.Component {
  state = { count: 0, calcul: 0 };

  increment = () => {
    if (this.state.count < 10) {
    }
    this.setState({
      count: this.state.count + 1,
      calcul: this.state.calcul + 10
    });
  };

  decrement = () => {
    if (this.state.count > 0)
      this.setState({
        count: this.state.count - 1,
        calcul: this.state.calcul - 10
      });
  };

  render() {
    return (
      <div>
        <p className="buyingTickets">You can buy your tickets here</p>
        <button onClick={this.decrement} className="ticketsButton">
          -
        </button>
        <span>{this.state.count} ticket, </span>
        <span>{this.state.calcul} €</span>
        <button onClick={this.increment} className="ticketsButton">
          +
        </button>
      </div>
    );
  }
}

export default Counter;
