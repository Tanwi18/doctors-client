import React from 'react';
import doctor from '../../../images/doctor.png';
import DoctorsDetails from '../DoctorsDetails/DoctorsDetails';
import { faPhone } from '@fortawesome/free-solid-svg-icons'
 
const doctors=[
    {
        name:'Dr. Choudi',
        img:doctor,
        contact:'+65478956432',
        icon:faPhone
    },
    {
        name:'Dr. Choudi',
        img:doctor,
        contact:'+65478956432',
        icon:faPhone
    },
    {
        name:'Dr. Choudi',
        img:doctor,
        contact:'+65478956432',
        icon:faPhone
    }
]
const Doctors = () => {
    
    return (
       <div className="offset-1 pt-5 mb-5">
           <p style={{color:'#1cc7c1',textAlign:'center'}}>Our Doctors</p>
            <div className="row">
                {
                   doctors.map(doctor=><DoctorsDetails doctor={doctor}></DoctorsDetails>)
                }
        </div>
       </div>
    );
};

export default Doctors;