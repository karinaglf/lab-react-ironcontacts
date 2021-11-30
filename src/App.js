import { useState } from 'react';
import './App.css';
import contactsJson from "./contacts.json";

function App() {
  const numCelebrities = 10;

  const [contacts, setContacts] = useState(contactsJson.slice(0, numCelebrities));

  const addRandom = () => {
    const notListed = [...contactsJson].splice(numCelebrities);
    const randomCelebrity = notListed[Math.floor(Math.random() * notListed.length)];
    //const updatedList = contacts.push(randomCelebrity)

    setContacts(contacts.concat(randomCelebrity))
  }

  const sortByName = () => {
    const arrByName = [...contacts].sort((a,b) => (a.name) > b.name ? 1 : -1)
    //console.log(arrByName)

    setContacts(arrByName)
  }

  const sortByPopularity = () => {
    const arrByPopularity = [...contacts].sort((a,b) => (a.popularity) > b.popularity ? 1 : ((b.popularity > a.popularity) ? -1 : 0))
    //console.log(arrByPopularity)
    
    setContacts(arrByPopularity)
  }

  const deleteCelebrity = (celebrityId) => {

    const filteredCelebrities = contacts.filter((celebrity) => {
      return celebrity.id !== celebrityId;
    })

    setContacts(filteredCelebrities);
  }

  return (
    <div className="App">
    
    <div className="btn-row">
    <button className="btn" onClick={addRandom}>Add a Random Contact</button>
    
    <button className="btn" onClick={sortByName}>Sort By Name</button>
    
    <button className="btn" onClick={sortByPopularity}>Sort By Popularity</button>
    </div>

    <table className="celebritiesTable">
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Won an Oscar</th>
        <th>Won an Emmy</th>
        <th>Actions</th>
      </tr>      
        {contacts.map((celebrity) => {
          return (
          <tr>
            <td><img src={celebrity.pictureUrl} /></td>
            <td>{celebrity.name}</td>
            <td>{Math.round((celebrity.popularity) * 100) / 100}</td>
            { celebrity.wonOscar ? <td> 🏆</td> : <td> </td>}
            { celebrity.wonEmmy ? <td> 🌟</td> : <td> </td>}
            <td><button className="btn" onClick={() => deleteCelebrity(celebrity.id) }>Delete</button></td>
          </tr>
          )
      })}
    </table>
    </div>
  );
}

export default App;
