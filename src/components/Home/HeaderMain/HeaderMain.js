import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../../images/chair.png.png';

const HeaderMain = () => {
    return (
        <div style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-4 offset-md-1 ">
               <h1>Your New Smile <br/> Starts Here</h1>
               <p className="text-secondary">lorem ipsum is simply dummy text of the printing and typesetting industry.Lorem ipsum has been the industry's standard dummy text</p>
             <Link to="/appointment">
             <button className="button">GET APPOINTMENT</button>
             </Link>
            </div>
            <div className="col-6">
              <img src={chair} alt="" className="img-fluid"></img>
            </div>
        </div>
    );
};

export default HeaderMain;