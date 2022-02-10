import './SocialCard.css';
import Name from './Name';
import Username from './Username';
import Website from './Website';
import Popup from './Popup';

const SocialCard = ({ userData }) => {
    return (
        <div className="card">
            <div className="card__title">{userData.name.first} {userData.name.last}</div>
            <div className="card__body">
                <Name name={userData.name}/>
                <Username username={userData.username}/>
                <Website website={userData.website}/>
            </div>
            <button id="myBtn">More Info</button>

            <div id="myModal" class="modal">

              <div class="modal-content">
                <span class="close">&times;</span>
                <p></p>
              </div>

            </div>



        </div>
    )
};

export default SocialCard;