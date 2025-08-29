import React, { useRef } from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

function ContactList(props) {

  const inputEl = useRef('')

  const deletContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard contacts={contact} clickHandler={deletContactHandler} />
    );
  });

  const getSearchTerm = () => {
    props.searchKeywords(inputEl.current.value);
    
  }

  return (
    <div className="main" style={{ marginTop: "80px" }}>
      <h2>
        Contact List
        <Link to={"/add"}>
          <button className="ui button primary" style={{ marginLeft: "180px" }}>ADD CONTACT</button>
        </Link>
      </h2>
      <div className="ui search">
        <div className="ui icon input">
          <input type="text" placeholder="Search Contacts" className="prompt" ref={inputEl} value={props.term} onChange={ getSearchTerm} />
          <i className="search icon"></i>
        </div>
      </div>
      <div className="ui celled list">{renderContactList.length > 0 ? renderContactList : "No Contact available"}</div>
    </div>
  );
}

export default ContactList;
