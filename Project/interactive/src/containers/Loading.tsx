import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Home from "../pages/Home/Home"
import Mechanics from "../pages/Mechanics/Mechanics"
import SpureGear from '../pages/3DModel/SpureGear';
import TurbofanEngine from "../pages/3DModel/Turbofan"
import F6Boxer from "../pages/3DModel/F6Boxer"
import CombustionEngine from "../pages/3DModel/CombustionEngine"
import V8 from "../pages/3DModel/V8"
import About from "../pages/About/About"
//import TwilioRoute from '../pages/Chatroom/TwilioRoute';

export default function Loading() {
    return (
        
        
        <div id="wrapper">
<div className="gears" id="two-gears">
  
  <div className="gears-container">
    <div className="gear-rotate"></div>
    <div className="gear-rotate-left"></div>
  </div>

  
</div>

</div>
        
    )
}

/* <Route path='/chatroom' exact component={TwilioRoute} /> */