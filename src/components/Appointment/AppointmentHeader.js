import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import chair from '../../images/chair.png.png'



const AppointmentHeader = ({ handleChange }) => {

    return (
        <div>
            <div style={{ height: '600px' }} className="row d-flex align-items-center">
                <div className="col-4 offset-md-1 ">
                    <h1>Appointment</h1>
                    <Calendar
                        onChange={handleChange}
                        value={new Date()}
                    />
                </div>
                <div className="col-6">
                    <img src={chair} alt="" className="img-fluid"></img>
                </div>
            </div>
        </div>
    );
};

export default AppointmentHeader;