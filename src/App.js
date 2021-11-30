import { useState } from 'react';
import './App.css';
import contactsJson from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsJson.slice(0,5));

  return (
    <div className="App">

    {contacts.map((celebrity) => {
      return (
        <p>{celebrity.name}</p>
      )
    })}

    </div>
  );
}

export default App;
