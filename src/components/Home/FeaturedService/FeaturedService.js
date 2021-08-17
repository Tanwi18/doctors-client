import React from 'react';
import featured from '../../../images/featured.png';
import './FeaturedService.css';

const FeaturedService = () => {
    return (
      <section style={{height:'400px'}} className="mb-5 "> 
            <div className="row featured-container mt-5 w-75 pt-5 mb-5 " >
            <div className="col-md-6 d-flex justify-content-end">
              <img src={featured} alt=" " className="img-fluid featured-img "></img>
            </div>
            <div className="col-md-6">
                <h2 style={{left:'0px'}}>Exceptional Dental <br/>Care, on Your Terms</h2>
                <p className="text-secondary mb-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at it's layout.The point of using Lorem ipsums that it has a more or less normal distribution of letters.</p>
               <button className="button">Learn more</button>
            </div>
        </div>
      </section>
    );
};

export default FeaturedService;