import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Chatroom from "./Chatroom";
import ChatWindow from "./Chatwindow";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/chat" component={ChatWindow} />
        <Route path="/" component={Chatroom} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
