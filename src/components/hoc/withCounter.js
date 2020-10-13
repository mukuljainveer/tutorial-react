import React from "react";

const withCounter = (WrappedComponent) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    incrementButtonHandler = () => {
      return this.setState({ count: this.state.count + 1 });
    };

    render() {
      return <WrappedComponent count={this.state.count}  incrementButtonHandler={this.incrementButtonHandler} />;
    }
  }

  return WithCounter;
};

export default withCounter;
