import React from "react";

const SingleContact = ({ selectedContact }) => {
  return (
    <div id="single-contact">
      <div id="contact-info">
        <p>
          <b>Name:</b>
          {selectedContact.name}
        </p>
        <p>
          <b>Email:</b>
          {selectedContact.email}
        </p>
        <p>
          <b>Phone:</b>
          {selectedContact.phone}
        </p>
        <div>
          <b>Address:</b>
          <p>
            <b>Street:</b>
            {selectedContact.address.street}
            <br />
            <b>City/State:</b>
            {selectedContact.address.city}
            {selectedContact.address.state}
          </p>
        </div>
        <p>
          <b>Company:</b>
          {selectedContact.company.name}
        </p>
      </div>
    </div>
  );
};

export default SingleContact;
