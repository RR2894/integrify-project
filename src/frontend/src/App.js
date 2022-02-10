import { useState, useEffect } from "react";
import "./App.css";
import SocialCard from "./SocialCard";
import Popup from './Popup';

function App() {
  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);

  const [currentModalContent, setCurrentModalContent] = useState();

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
    const filteredUsers = allUsers.filter(user => (user.name.toLowerCase().includes(value)));
    setUsers(filteredUsers);
  }
  {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () =>
      setIsOpen(!isOpen);
    }

   return (
      <div className="App">
          {currentModalContent?

          //show the modal
                      (<div id="myModal" class="modal">
                          <div class="modal-content">
                          <span class="close" onClick={() => setCurrentModalContent(undefined)}>&times;</span>
                          <p><b>Contact Information</b></p>
                          <p>Name: {currentModalContent.name}</p>
                          <p>Username: {currentModalContent.username}</p>
                          <p>Email: {currentModalContent.email}</p>
                          <p>Phone: {currentModalContent.phone}</p>
                          <p>Website: {currentModalContent.website}</p>
                          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                          <p><b>Company</b></p>
                          <p><i>Name: {currentModalContent.company.name}</i></p>
                          <p><i>Catchphrase: "{currentModalContent.company.catchPhrase}"</i></p>
                          <p><i>Bs: {currentModalContent.company.bs}</i></p>
                          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                          <p><b>Address</b></p>
                          <p><i>Street: {currentModalContent.address.street}</i></p>
                          <p><i>Suite: {currentModalContent.address.suite}</i></p>
                          <p><i>City: {currentModalContent.address.city}</i></p>
                          <p><i>Zipcode: {currentModalContent.address.zipcode}</i></p>
                          </div>
                      </div>)

          //otherwise show nothing
                  : null}



      <h1>User Cards</h1>
      <input className="search-box" onInput={filterCards} placeholder="Look for users..."/>
      <div className="cards-container">

      {users.map((user, index) => (
        <SocialCard key={index} userData={user} setModal={setCurrentModalContent}/>
        ))}
      </div>
    </div>
  );
}



export default App;