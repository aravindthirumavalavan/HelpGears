import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Home.css';
const Home = () => {
     return (
          <div className='home-container'>
               <div className="main-header">
                    <h1>DONATE</h1>
               </div>
               <div className='sub-header'>
                    <h2>Together we can make a difference</h2>
               </div>
               <div className="donate-button">
                    <Link to="/StripeContainer" className="btn donate-btn">
                         <p className="btn-text">Donate Now</p></Link>
               </div>
          </div>
     );
};
export default withRouter(Home)