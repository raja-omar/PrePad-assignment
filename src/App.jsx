import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ContactForm from './pages/AddContact';
import EditContact from './pages/EditContact';
const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // Load contacts from local storage on initial render
    const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(storedContacts);
  }, []);

  const isEmailUnique = (email) => {
    return !contacts.some((contact) => contact.email === email);
  };

  const addContact = (newContact) => {
    // Check if the email is unique before adding the contact
    if (isEmailUnique(newContact.email)) {
      setContacts([...contacts, newContact]);

      // Save to local storage
      const updatedContacts = [...contacts, newContact];
      localStorage.setItem('contacts', JSON.stringify(updatedContacts));
    } else {
      alert('Email address must be unique');
    }
  };

  const editContact = (email, updatedContact) => {
    const updatedContacts = contacts.map((contact) =>
      contact.email === email ? { ...contact, ...updatedContact } : contact
    );
    setContacts(updatedContacts);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  const deleteContact = (email) => {
    const updatedContacts = contacts.filter(
      (contact) => contact.email !== email
    );
    setContacts(updatedContacts);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  // Wasn't asked to implement this but still
  // put it here

  // const clearAllData = () => {
  //   localStorage.clear();
  //   setContacts([]);
  // };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home contacts={contacts} deleteContact={deleteContact} />}
        />
        <Route
          path="/add-contact"
          element={<ContactForm addContact={addContact} />}
        />
        <Route
          path="/edit-contact/:email"
          element={
            <EditContact contacts={contacts} editContact={editContact} />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
