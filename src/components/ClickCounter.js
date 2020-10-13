import React, { Component } from "react";
import withCounter from './hoc/withCounter'

class ClickCounter extends Component {
 

  render() {
    const { count } = this.props;

    return (
      <div>
        <button onClick={this.props.incrementButtonHandler}>
        {this.props.name}  Clicked {count} times
        </button>
      </div>
    );
  }
}

export default withCounter(ClickCounter)