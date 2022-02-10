import './SocialCard.css';
import Name from './Name';
import Username from './Username';
import Website from './Website';
import Popup from './Popup';

const SocialCard = ({ userData, setModal }) => {
    return (
        <div className="card">
            <div className="card__title">{userData.name.first} {userData.name.last}</div>
            <div className="card__body">
                <Name name={userData.name}/>
                <Username username={userData.username}/>
                <Website website={userData.website}/>
            </div>
            <button id="myBtn" onClick={() => {setModal(userData)}}>More Info</button>

        </div>
    )
};

export default SocialCard;