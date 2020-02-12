import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home/Home";
import Books from "./Books/Books";
import Authors from "./Authors/Authors";

export default function Routes(){
    return(
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Books" exact component={Books} />
            <Route path="/Authors" exact component={Authors} />
        </Switch>
    );
}