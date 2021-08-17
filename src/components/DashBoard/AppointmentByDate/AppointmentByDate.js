import React from 'react';

const AppointmentByDate = ({appointments}) => {
    return (
        <div>
            <h2>Appointment : {appointments.length}</h2>
            {
                appointments.map(app=><li>{app.name}</li>)
            }
        </div>
    );
};

export default AppointmentByDate;