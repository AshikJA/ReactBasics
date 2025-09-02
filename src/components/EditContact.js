import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const EditContact = (props) => {
  const location = useLocation();
  const navigate = useNavigate();


  const { id, name: initialName, email: initialEmail } = location.state.contacts;

  const [state, setState] = useState({
    id,
    name: initialName,
    email: initialEmail,
  });

  const update = (e) => {
    e.preventDefault();

    if (state.name === "" || state.email === "") {
      alert("All the fields are mandatory");
      return;
    }

    props.updateContactHandler(state);
    setState({ name: "", email: "" }); 
    navigate("/");
  };

  return (
    <div className="ui main" style={{ marginTop: "80px" }}>
      <h2>Update Contact</h2>
      <form className="ui form" onSubmit={update}>
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

        <button className="ui button blue">Update</button>
      </form>
    </div>
  );
};

export default EditContact;
