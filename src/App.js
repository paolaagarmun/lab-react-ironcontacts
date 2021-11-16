import contactsData from './contacts.json'
import './App.css';
import {useState} from 'react';

const firstFive = contactsData.splice(0,5)

function App() {
  const [addedContact, setAdded] = useState(firstFive);


  console.log(firstFive);
  
  // setContacts( (
  //   
  // ))
    
  
  function addRandomContact() {
      if(contactsData.length === 0) return;
      const randomIndex = Math.floor(Math.random()*contactsData.length)
      const randomContact = contactsData.splice(randomIndex,1);
      setAdded([...addedContact, randomContact[0]])
  }

  function sortByName() {
   // let contactsCopy = [...addedContact]
    const sorted = addedContact.sort((a,b) => {
      if ( a.name < b.name ){
        return -1;
      }
      if ( a.name > b.name ){
        return 1;
      }
      return 0;
    })
    
    setAdded([...sorted])
  }

  function sortByPopularity() {
    const contactsCopy = [...addedContact]
    const sorted = contactsCopy.sort((a,b) => {
     if(a.popularity > b.popularity){
       return -1
     }
     if(a.popularity < b.popularity){
       return 1
     }
     return 0
    })
    setAdded(sorted)
  }

  function deleteContact(i){
     const filtered = addedContact.filter((contact,index) => {
       return i !== index;
     }) 
     setAdded([...filtered])
  }
     
  
  
  return (
    <div className="App" style={{ alignItems: "center"}}>

      <h1>IronContacts</h1>
      {/* only in brackets because it's a callback function. we don't want to excecute until we click the button */}
      <div className="buttons">
      <button onClick={addRandomContact}>Add random contact</button>
      <button onClick={sortByName}>Sort by Name</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>
      </div>
      <table>
      <thead>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Won Oscar</th>
        <th>Won Emmy</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
        {addedContact.map((contact,index) => (
        <tr key={index}>
          <td><img src={contact.pictureUrl} alt="img" style={{height: "250px"}}/> </td>
          <td>{contact.name}</td>
          <td>{contact.popularity}</td>
          <td>{contact.wonOscar ? "🏆" : null}</td>
          <td>{contact.wonEmmy ? "🏆" : null}</td>
          <td><button onClick={() =>deleteContact(index) }>Delete</button></td>
        </tr>
        ))}
      </tbody>
  
    </table>
   
    </div>
  );
}

export default App;
