import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faSignOutAlt, faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './SideBar.css';

const SideBar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between  py-5 px-4 " style={{backgroundColor:'green',height:"100vh"}}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white" style={{textDecorationLine:'none'}}>
                      <FontAwesomeIcon icon={faGripHorizontal}/><span>DashBoard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="text-white" style={{textDecorationLine:'none'}}>
                     <FontAwesomeIcon icon={faHome}/><span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/allPatients" className="text-white" style={{textDecorationLine:'none'}}>
                     <FontAwesomeIcon icon={faCalendar}/><span>Appointment</span>
                    </Link>
                </li>
                <li>
                    <Link to="/patients" className="text-white" style={{textDecorationLine:'none'}}> 
                     <FontAwesomeIcon icon={faUsers}/><span>Patients</span>
                    </Link>
                </li>
                <li>
                    <Link to="/prescriptions" className="text-white" style={{textDecorationLine:'none'}}>
                     <FontAwesomeIcon icon={faFileAlt}/><span>Prescriptions</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addDoctor" className="text-white" style={{textDecorationLine:'none'}}>
                     <FontAwesomeIcon icon={faUserPlus}/><span>Add Doctor</span>
                    </Link>
                </li>
                <li>
                     <Link to="/doctor/setting" className="text-white" style={{textDecorationLine:'none'}}>
                            <FontAwesomeIcon icon={faCog} /> <span>Settings</span>
                        </Link>
                </li>
            </ul>
            <div>
                <Link to="/" style={{textDecorationLine:'none'}} className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default SideBar;