import React from "react";
import { Link } from "react-router-dom";

function ContactCard(props) {
  const { id, name, email } = props.contacts;

  return (
    <div className="item">
      <div className="content">
        <Link to={`/contact/${id}`} state={{ contacts: props.contacts }}>
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        onClick={() => props.clickHandler(id)}
      >
      </i>
      <Link to={`/edit`} state={{ contacts: props.contacts }}>
      <i
        className="edit alternate outline icon"
      >
      </i></Link>
    </div>
  );
}

export default ContactCard;
