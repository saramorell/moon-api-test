import React, { Component } from 'react';


class MoonComponent extends Component {
  render() {
    return (
      <div>
      <p>Current Moon: {this.props.Phase}</p>
      </div>
    );
  }
}

export default MoonComponent;
