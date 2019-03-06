

import React from 'react';
import {Switch, Route} from 'react-router-dom';

import LandingPage from './landingPage';
import About from './About.js'; 
import Contact from './contact';
import Login from './login';
import Survey from './survey';
import AddUser from './AddUser';
import Loginscreen from './Loginscreen';
import AddSurvey from './AddSurvey';

const Main =() =>(
    <Switch> 
        <Route exact path="/" component ={LandingPage} /> 
        <Route exact path="/About" component ={About} /> 
        <Route exact path="/contact" component ={Contact} /> 
        <Route exact path="/login" component ={Login} /> 
        <Route exact path="/survey" component ={Survey} /> 
        <Route exact path="/adduser" component ={AddUser} /> 
        <Route exact path="/addsurvey" component ={AddSurvey} /> 
        <Route exact path="/Loginscreen" component ={Loginscreen} /> 
       

        
 
    </Switch>

)
  
export default Main;