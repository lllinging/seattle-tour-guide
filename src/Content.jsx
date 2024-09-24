import  './css/Content.css';

function Content({ username, onLogout }) {
    return (
      <div className="user__content">
        Hello {username}
        <button className="user__logout" onClick={onLogout}>Logout</button>
      </div>
    );
  }
  
  export default Content;