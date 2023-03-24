import React, { Component } from "react";

class Strawberry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: "Lindsey",
        dateOfBirth: "03/12/1996",
        contactNumber: "704-777-1234",
        email: "lharris1228@r2hstudent.org",
      },
    };
  }

  render() {
    const BasicInfo = (props) => (
      <div>
        <p>Name: {this.state.person.name}</p>
        <p>Date of Birth: {this.state.person.dateOfBirth}</p>
        <p>Contact Number: {this.state.person.contactNumber}</p>
        <p>Email: {this.state.person.email}</p>
      </div>
    );

    return (
      <div>
        <BasicInfo person={this.state.person} />
      </div>
    );
  }
}

export default Strawberry;
