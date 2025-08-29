import { useEffect, useState } from "react";
import "./App.css";
import ContactList from "./ContactList";
import Header from "./Header";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddContactWrapper from "./AddContactWrapper";
import ContactDetails from "./ContactDetails";
import api from './api/contact'
import EditContactWrapper from "./EditContactWrapper";

function App() {

  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResult, setSearchResult] = useState([])
 
  //RetrieveContacts
  const retrieveContacts = async () => {
    const response = await api.get("/contacts")
    return response.data
  }

  const addContactHandler = async (contact) => {
    const request = { id: uuidv4(), ...contact }
    const response = await api.post('/contacts', request)
    setContacts([...contacts, response.data]);
  };

  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact)
    const { id} = response.data
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? {...response.data} : contact
      })
    ) 
  }

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`)
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if(searchTerm !== '') {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact).join(" ").toLowerCase().includes(searchTerm.toLowerCase())
      })
      setSearchResult(newContactList)
    }else {
      setSearchResult(contacts)
    }

  }

  useEffect(() => {
    const getAllContacts = async () => {
      const allContact = await retrieveContacts()
      if(allContact) setContacts(allContact)
    }
  getAllContacts()
  }, [])

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <ContactList
                contacts={searchTerm.length < 1 ? contacts : searchResult}
                getContactId={removeContactHandler}
                term={searchTerm}
                searchKeywords={searchHandler}
              />
            }
          />
          <Route
            path="/add"
            element={<AddContactWrapper addContactHandler={addContactHandler} />}
          />
          <Route
            path="/edit"
            element={<EditContactWrapper updateContactHandler={updateContactHandler} />}
          />
          <Route path="/contact/:id" element={<ContactDetails/> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
