import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './DoctorsDetails.css'


const DoctorsDetails = ({doctor}) => {
    return (
        <div className="col-md-4 ">
            <img src={doctor.img} alt=" " className="img-doctor offset-1"></img>
            <h6 style={{textAlign:'center'}}>{doctor.name}</h6>
            <div className="d-flex justify-content-center">
          
            <FontAwesomeIcon icon={doctor.icon} />
               <small>{doctor.contact}</small>
            </div>
        </div>
    );
};

export default DoctorsDetails;