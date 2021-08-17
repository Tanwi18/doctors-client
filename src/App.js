import React, { createContext, useState} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Appointment from './components/Appointment/Appointment';
import Login from './components/Login/Login';
import PrivateRoute from 'react-private-route'
import DashBoard from './components/DashBoard/DashBoard';
import AddDoctor from './components/DashBoard/AddDoctor';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser]=useState({});
  console.log(loggedInUser)
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <p>{loggedInUser.name}</p>
         <Router>
      
        <Switch>
         
          <Route path="/appointment">
            <Appointment/>
          </Route>
           <Route path="/login">
              <Login></Login>
           </Route>
           <PrivateRoute path="/dashboard">
             <DashBoard></DashBoard>
           </PrivateRoute>
           {/* <Route path="/dashboard">
             <DashBoard></DashBoard>
           </Route> */}
           <Route path="/addDoctor">
              <AddDoctor></AddDoctor>
           </Route>
           <Route exact path="/">
            <Home/>
          </Route>
         
        </Switch>
      
    </Router>
    </UserContext.Provider>
  );
}

export default App;
