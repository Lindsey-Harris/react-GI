import React, { Component } from "react";

class Prune extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {
          name: "John Doe",
          dateOfBirth: "Jan 14, 1980",
          contactNumber: "614-555-1234",
          email: "john.doe@example.com",
        },
        {
          name: "Jane Smith",
          dateOfBirth: "Feb 2, 1990",
          contactNumber: "555-5678",
          email: "jane.smith@example.com",
        },
        {
          name: "Kate Spade",
          dateOfBirth: "Mar 3, 2000",
          contactNumber: "980-355-9012",
          email: "kate.spade@example.com",
        },
      ],
    };
  }

  render() {
    const BasicInfo = ({ person }) => (
      <div>
        <p>Name: {person.name}</p>
        <p>Date of Birth: {person.dateOfBirth}</p>
        <p>Contact Number: {person.contactNumber}</p>
        <p>Email: {person.email}</p>
      </div>
    );

    const peopleList = this.state.people.map((person, index) => (
      <div key={index}>
        <BasicInfo person={person} />
      </div>
    ));

    return (
      <div>
        {peopleList}
      </div>
    );
  }
}

export default Prune;
