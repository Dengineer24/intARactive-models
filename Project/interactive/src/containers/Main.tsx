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
import TwilioRoute from '../pages/Chatroom/TwilioRoute';

export default function Main() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/mechanics' exact component={Mechanics} />
                <Route path='/spuregear' exact component={SpureGear} />
                <Route path='/turbofan' exact component={TurbofanEngine} />
                <Route path='/f6boxer' exact component={F6Boxer} />
                <Route path='/combustionengine' exact component={CombustionEngine} />
                <Route path='/v8' exact component={V8} />
                <Route path='/about' exact component={About} />
                <TwilioRoute />
            </Switch>
            <Footer />
        </Router>
    )
}
