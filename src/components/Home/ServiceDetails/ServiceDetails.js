import React from 'react';
import './ServiceDetails.css';

const ServiceDetails = ({service}) => {
    return (
        <div className="col-md-4">
            <img src={service.img} alt=" " className="img"></img>
            <h5 className="mt-3 mb-3">{service.name}</h5>
            <small className="text-secondary">{service.description}</small>
        </div>
    );
};

export default ServiceDetails;