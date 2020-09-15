import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logo.png';
import'./Header.css';

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="Header">
          <img src={logo} alt="Ema-John-Logo"/>  
          <nav>
            <Link to="/shop">Shop</Link>
            <Link to="review">Order Review</Link>
            <Link to="inventory">Manage Inventory</Link>
            <p className="loggedInUserName">Welcome {loggedInUser.name}</p>
            <button onClick ={() => setLoggedInUser({})}>Sign out</button>
          </nav>
        </div>
    );
};

export default Header;