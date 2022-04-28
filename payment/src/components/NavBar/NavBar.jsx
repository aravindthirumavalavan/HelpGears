import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './NavBar.css';
class NavBar extends React.Component {
     render() {
          const { location } = this.props;
          console.log(location);
          const homeClass = location.pathname === '/' ? 'active-item' : '';
          const aboutClass = location.pathname === '/About' ? 'active-item' : '';
          const donateClass = location.pathname === '/Donate' ? 'active-item' : '';
          return (
               <nav>
                    <Link to="/" className={`menu-item ${donateClass}`}>Help Gears</Link>
                    <ul className="nav-links">
                         <Link to="/" className={`menu-item ${homeClass}`} >Home</Link>
                         <Link to="/About" className={`menu-item ${aboutClass}`}>About</Link>
                    </ul>
               </nav>
          );
     }
};
export default withRouter(NavBar);