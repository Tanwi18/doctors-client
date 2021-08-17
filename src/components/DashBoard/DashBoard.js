import React, { useContext, useEffect, useState } from 'react';
import AppointmentByDate from './AppointmentByDate/AppointmentByDate';
import SideBar from './sideBar/SideBar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../App';

const DashBoard = () => {
    const [loggedInUser , setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate]=useState(new Date())
    const [appointments,setAppointments]= useState([]);

    const handleChange=date=>{
      setSelectedDate(date);
    };

    //  useEffect(()=>{
    //     fetch('http://localhost:5000/appointmentByDate',{
    //         method:'POST',
    //         headers:{
    //             'content-type':'application/json'
    //         },
    //       body:JSON.stringify({date:selectedDate,email:loggedInUser.email})
    //     })
    //     .then(res=>res.json())
    //     .then(data=>setAppointments(data))
    // },[selectedDate])
    console.log(appointments)
    console.log(loggedInUser)

    return (
        <div className="row" style={{height:'100%'}}>
            <div className="col-md-2">
                <h1>history</h1>
                {/* <SideBar></SideBar> */}
            </div>
            <div className="col-md-5">
            {/* <Calendar
                        onChange={handleChange}
                        value={new Date()}
                    /> */}
            </div>
            <div className="col-md-5">
                {/* <AppointmentByDate appointments={appointments}></AppointmentByDate> */}
                
            </div>
        </div>
    );
};


export default DashBoard;
