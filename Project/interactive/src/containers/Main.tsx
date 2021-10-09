import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Home from "../pages/Home/Home"
import Mechanics from "../pages/Mechanics/Mechanics"
import About from "../pages/About/About"
import TwilioRoute from '../pages/Chatroom/TwilioRoute';

export default function Main() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/mechanics' exact component={Mechanics} />
                <Route path='/about' exact component={About} />
                <Route path='/chatroom' exact component={TwilioRoute} />
            </Switch>
        </Router>
    )
}