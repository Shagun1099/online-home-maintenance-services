import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import {Link} from 'react-router-dom';
import {useStateValue} from './StateProvider';
import {auth} from './firebase';


function Header() {
	
const [{user},dispatch] = useStateValue();
	
const handleAuth = () => {
    if (user) {
      auth.signOut();
	  dispatch({
      type: "SET_USER",
	  user:null
      })
	}
  }
	
  return (
    <div className="header">
	 <div className="header__left">
		<HomeIcon fontSize="large"/>
		<Link to="/">
		<h2>OHMS</h2>
		</Link>
	  <div className="header_search">
	  <input className="header_searchInput" type="text"/> 
	  <SearchIcon className="header_searchIcon"/>
	  </div>
	</div>
	  <div className="header_nav">
		  <Link to={!user && '/login'}>
          <div onClick={handleAuth} className="header_option">
            <span className="header_optionLineOne">Hello {!user ? 'Guest' : user.user?.displayName.split(" ")[0]}</span>
            <span className="header_optionLineTwo">{user ? 'Sign Out': 'Sign In'}</span>
          </div>
		  </Link>
		  <Link to='/orders'>
		<div className="header_option">
		 <span className="header_optionLineOne">Your</span>
		 <span className="header_optionLineTwo">Bookings</span>
		</div>
	    </Link>
		<div className="header_option">
		 <span className="header_optionLineOne">OHMS </span>
		 <span className="header_optionLineTwo">Prime</span>
		</div>
		  <Link to='/profile'>
          <div className="header_option">
		    <span className="header_optionLineOne">Your</span>
		    <span className="header_optionLineTwo">Profile</span>
         </div>
		  </Link>
	  </div>
    </div>
  );
}

export default Header;