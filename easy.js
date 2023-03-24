import React, { Component } from 'react';

class Apple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {}
    };
  }

  render() {
    return (
      <div>
        <p>Name: {this.state.person.name}</p>
        <p>Date of Birth: {this.state.person.dateOfBirth}</p>
        <p>Contact Number: {this.state.person.contactNumber}</p>
        <p>Email: {this.state.person.email}</p>
      </div>
    );
  }
}

export default Apple;
