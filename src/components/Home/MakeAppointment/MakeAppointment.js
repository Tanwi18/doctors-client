import React from 'react';
import './MakeAppointment.css';
import doctor from '../../../images/doctor.png';
import background from '../../../images/background.png';

const MakeAppointment = () => {
    return (
        
            <div className=" appoint-background">
               <div >
               <div className="row container">
               <div className="col-md-6 d-none d-md-block ">
                 <img src={doctor} alt="" className="img-fluid"></img>
               </div>
               <div className="col-md-6 t">
                   <h6 style={{color:'#1cc7c1'}}>Appointment</h6>
                   <h2 className="text-white">Make an appointment <br/>Today</h2>
                   <p className="text-white">It is a long established fact that a reader will be distracted by the readable content of a page</p>
               <button className="button mt-5">Learn more</button>
               </div>
               </div>
               </div>
            </div>
    
    );
};

export default MakeAppointment;