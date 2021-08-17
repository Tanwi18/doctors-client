import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({bookingData ,date}) => {
    const [modalIsOpen,setIsopen]=useState(false);
   function openModal() {
        setIsopen(true);
      }
     
    function  closeModal() {
        setIsopen( false);
      }
    return (
        <div className="col-md-4 mb-5 ">
            <div className="card p-3">
               <div className="card-body text-center">
                 <h5 className="card-title color">{bookingData.title}</h5>
                 <h6>{bookingData.visitingHour}</h6>
                 <p>{bookingData.totalSpace} SPACES AVAILABLE</p>
                 <button onClick={openModal} className="btn button text-uppercase">book appointment</button>
               <AppointmentForm modalIsOpen={modalIsOpen} closeModal={closeModal} appointOn={bookingData.title} date={date}></AppointmentForm>
               </div>
            </div>
        </div>
    );
};

export default BookingCard;