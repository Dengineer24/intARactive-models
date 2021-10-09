import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import WelcomeScreen from "./Chatroom";
import ChatWindow from "./Chatwindow";

function TwilioRoute() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/chat" component={ChatWindow} />
        <Route path="/" component={WelcomeScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default TwilioRoute;
