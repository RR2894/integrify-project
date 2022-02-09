import './SocialCard.css';
import Name from './Name';
import Username from './Username';
import Website from './Website';

const SocialCard = ({ userData }) => {
    return (
        <div className="card">
            <div className="card__title">{userData.name.first} {userData.name.last}</div>
            <div className="card__body">
                <Name name={userData.name}/>
                <Username username={userData.username}/>
                <Website website={userData.website}/>
            </div>
            <button>More Info</button>

        </div>
    )
};

export default SocialCard;