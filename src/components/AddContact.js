import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const AddContact = (props) => {
  const navigate = useNavigate()
  const [state, setState] = useState({
    name: "",
    email: ""
  });

  const add = async (e) => {
    e.preventDefault();
    if (state.name === "" || state.email === "") {
      alert("All the fields are mandatory");
      return;
    }

  const response = await fetch(`http://localhost:3006/contacts?email=${state.email}`);
  const data = await response.json();

  if (data.length > 0) {
    alert("This email is already taken");
    return;
  }

    props.addContactHandler(state);
    setState({ name: "", email: "" });
    navigate("/"); 
  };

  return (
    <div className="ui main" style={{ marginTop: "80px" }}>
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <br />
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={state.name}
            onChange={(e) => setState({ ...state, name: e.target.value })}
          />
        </div>

        <div className="field">
          <label>Email</label>
          <br />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={state.email}
            onChange={(e) => setState({ ...state, email: e.target.value })}
          />
        </div>

        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
};

export default AddContact;
