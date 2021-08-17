import React, { useState } from 'react';
import Footer from '../Home/Footer/Footer';
import Navbar from '../Home/Navbar/Navbar';
import './Appointment.css';
import AppointmentHeader from './AppointmentHeader';
import BookAppointment from './BookAppointment/BookAppointment';

const Appointment = () => {
    const [selectedDate,setSelectedDate]=useState(new Date())
    const handleChange=date=>{
      setSelectedDate(date);
      console.log(date)
    }
    return (
        <div>
            <Navbar></Navbar>
            <AppointmentHeader handleChange={handleChange}></AppointmentHeader>
            <BookAppointment date={selectedDate}></BookAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;