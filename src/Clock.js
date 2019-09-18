import React, { Component } from "react";

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date()
    };
  }
  componentDidMount() {
    this.timer = setInterval(this.tick, 1000);
  }

  tick = () => {
    this.setState({ date: new Date() });
  };
  render() {
    return (
      <div className="clockTime">{this.state.date.toLocaleTimeString()}</div>
    );
  }
}

export default Clock;
