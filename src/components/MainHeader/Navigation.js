import React, { useContext } from 'react';
import authContext from '../../Store/AuthContext';
import classes from './Navigation.module.css';

const Navigation = (props) => {
  
     const ctx = useContext(authContext)
     
        return(
        <nav className={classes.nav}>
        <ul>
          {ctx.isLoggedIn && (
            <li>
              <a href="/">Users</a>
            </li>
          )}
          {ctx.isLoggedIn && (
            <li>
              <a href="/">Admin</a>
            </li>
          )}
          {ctx.isLoggedIn && (
            <li>
              <button onClick={props.onLogout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
      
    
   
  );
};

export default Navigation;
