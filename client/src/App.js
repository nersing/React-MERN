import React from "react";
import Main from "./components/Main";
import Search from "./components/Search";
import Save from "./components/Save"

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
}  from "react-router-dom";

const App = () =>
<Router>
  <div>
    <Route exact path="/" component={Main} />
    <Route exact path="/search" component ={Search} />
    <Route exact path="/save" component={Save} />
  </div>
</Router>


export default App;
