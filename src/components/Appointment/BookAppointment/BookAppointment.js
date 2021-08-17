import React from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import BookingCard from '../BookingCard/BookingCard';

const BookAppointment = ({date}) => {

    const availableData=[
        {
            _id:'5edf47iu@hooeydn57',
            id:1,
            title:'Teeth orthodontics',
            visitingHour:'8.00AM-9.00PM',
            totalSpace:10
        },
        {
            _id:'5edf47iu@hooeydn58',
            id:2,
            title:'Cosmetic dentistry',
            visitingHour:'10:05AM-11:30PM',
            totalSpace:10
        },
        {
            _id:'5edf47iu@hooeydn59',
            id:3,
            title:'Teeth cleaning',
            visitingHour:'5pm-6.30pm',
            totalSpace:10
        },
        {
            _id:'5edf47iu@hooeydn60',
            id:4,
            title:'cavity protection',
            visitingHour:'8.00pm-9;30',
            totalSpace:10
        },
        {
            _id:'5edf47iu@hooeydn61',
            id:5,
            title:'Teeth orthodontics',
            visitingHour:'8.00pm-9.00pm',
            totalSpace:10
        },
        {
            _id:'5edf47iu@hooeydn62',
            id:6,
            title:'Teeth orthodontics',
            visitingHour:'8.00pm-9.00pm',
            totalSpace:10
        }
    ]
    return (
     <div >
            <div className="mb-5">
            <h2 className="color" style={{textAlign:'center'}}>Available Appointment on {date.toDateString()}</h2>
           </div>
        <div className="row m-3">
           {
               availableData.map(data=><BookingCard date={date} key={data.id} bookingData={data} ></BookingCard>)
           }
        </div>
        
     </div>
    );
};
export default BookAppointment;