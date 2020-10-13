import React, { Component } from "react";
import withCounter from './hoc/withCounter'

class HoverCounter extends Component {
  render() {
    const { count } = this.props;

    return (
      <div>
        <h2 onMouseOver={this.props.incrementButtonHandler}>{this.props.name} Hovered {count} times</h2>
      </div>
    );
  }
}


export default withCounter(HoverCounter)