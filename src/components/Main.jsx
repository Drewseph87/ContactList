import React, { useState, useEffect } from "react";
import ContactList from "./ContactList";
import SingleContact from "./SingleContact";

const Main = (props) => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState({});
  console.log(contacts);

  const getContacts = async () => {
    try {
      const response = await fetch(
        "http://jsonplace-univclone.herokuapp.com/users"
      );
      const results = await response.json();
      setContacts(results);

      // console.log("Grabbed the Contacts!", results);
    } catch (err) {
      console.err("Error! Did not grab the Contacts!");
    }
  };

  useEffect(() => {
    getContacts();
  }, []);

  const selectContact = async (contactId) => {
    try {
      const response = await fetch(
        "http://jsonplace-univclone.herokuapp.com/users/:contactId"
      );
      const results = await response.json();
      setSelectedContact(results);
    } catch (err) {
      console.err("Error! Did not grab the contact!");
    }
  };

  return (
    <div id="main">
      <div id="navbar">
        <div>Contact List</div>
      </div>
      <div id="container">
        <ContactList contacts={contacts} selectContact={selectContact} />
        <SingleContact selectedContact={selectedContact} />
      </div>
    </div>
  );
};

export default Main;
