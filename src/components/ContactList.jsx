import React from "react";
import ContactRow from "./ContactRow";

const ContactList = ({ contacts }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
        {contacts.map((contact) => {
          return <ContactRow contact={contact} key={contact.id} />;
        })}
      </tbody>
    </table>
  );
};

export default ContactList;
