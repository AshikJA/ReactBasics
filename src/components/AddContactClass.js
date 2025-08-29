import React, { Component } from "react";

export class AddContact extends Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault()
    if(this.state.name === '' ||  this.state.email === ''){
      alert('All the fields are mandatory')
      return
    }
    this.props.addContactHandler(this.state)
    this.setState({name : '', email : ''})
    this.props.navigate("/")
  }
  render() {
    return (
      <div className="ui main" style={{ marginTop: "80px" }}>
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <br />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <br />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button className="ui button primary">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
