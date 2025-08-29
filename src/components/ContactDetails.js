import React from "react";
import { Link, useLocation } from "react-router-dom";
import user from '../Images/images (1).jpeg'

function ContactDetails() {
  const location = useLocation();
  const { name, email } = location.state.contacts;
  return (
    <div className="main" style={{ marginTop: "80px" }}>
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="header">{name}</div>
        <div className="description">{email}</div>
      </div>
      <div className="div center" style={{ marginLeft: "480px" }}>
        <Link to={"/"}>
        <button className="ui button blue">Back to Contact List</button>
        </Link>
      </div>
    </div>
  );
}

export default ContactDetails;
