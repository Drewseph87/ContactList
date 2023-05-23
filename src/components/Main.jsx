import React, { useState } from "react";
import dummyContacts from "../dummyData";

const Main = (props) => {
  const [contacts, setContacts] = useState(dummyContacts);
  return (
    <div id="main">
      <div id="navbar">
        <div>Contact List</div>
        <div>
          {contacts.map((contact) => {
            return contact.name;
          })}
        </div>
      </div>
      <div id="container">
        {
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
              </tr>

              {Array.contacts.map((contacts) => {})}
              <tr>
                <td>Person One</td>
                <td>000-000-0000</td>
                <td>one@email.com</td>
              </tr>

              {/* Contact 2 */}
              <tr>
                <td>Person Two</td>
                <td>111-111-1111</td>
                <td>two@email.com</td>
              </tr>
            </tbody>
          </table>
        }
      </div>
    </div>
  );
};

export default Main;
