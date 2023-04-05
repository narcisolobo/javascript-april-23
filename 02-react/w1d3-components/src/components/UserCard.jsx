import React, { Component } from 'react'

// State: READ-ONLY but, deceptively so

export class UserCard extends Component {
  constructor(props) {
    super(props);
    // initial value of state
    this.state = {
      appearances: this.props.appearances,
    }
  }

  clickHandler() {
    this.setState({
      appearances: this.state.appearances + 1,
    })
    console.log(this.state.appearances);
  }

  render() {
    return (
      <fieldset>
        <legend>UserCard</legend>
        <h1>{this.props.fullName}</h1>
        <h2>{this.props.occupation}</h2>
        <p>No. of Appearances: {this.state.appearances}</p>
        <button onClick={() => this.clickHandler()}>INCREASE COUNT</button>
      </fieldset>
    )
  }
}

export default UserCard;
