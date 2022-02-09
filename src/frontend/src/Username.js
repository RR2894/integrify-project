import './Username.css';

const Username = ({ username }) => (
    <div className="username">
        <p>{'@'}{username}</p>
    </div>
);

export default Username;