import { useState, useEffect } from "react";
import "./App.css";
import SocialCard from "./SocialCard";
import Popup from './Popup';

function App() {
  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        userData = await response.json();
      } catch (error) {
        console.log(error);
        userData = [];
      }
      setAllUsers(userData);
      setUsers(userData);
    })();
  }, []);

  const filterCards = event => {
    const value = event.target.value.toLowerCase();
    const filteredUsers = allUsers.filter(user => (`${user.name}`.toLowerCase().includes(value)));
    setUsers(filteredUsers);
  }
  {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () =>
      setIsOpen(!isOpen);
    }

  return (
    <div className="App">
      <h1>User Cards</h1>
      <input className="search-box" onInput={filterCards} placeholder="Look for users..."/>
      <div className="cards-container">

      {users.map((user, index) => (
        <SocialCard key={index} userData={user} />
        ))}
      </div>
    </div>
  );
}



export default App;