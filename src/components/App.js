import React from "react";
import { Router, Route } from "react-router-dom";

import ShoeCreate from "./shoes/ShoeCreate";
import ShoeEdit from "./shoes/ShoeEdit";
import ShoeDelete from "./shoes/ShoeDelete";
import ShoeList from "./shoes/ShoeList";
import ShoeShow from "./shoes/ShoeShow";
import HomePage from "./HomePage";
import Header from "./Header";
import GoogleAuth from "./GoogleAuth";
import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={HomePage} />
          <Route path="/Shoes/new" exact component={ShoeCreate} />
          <Route path="/Shoes/edit" exact component={ShoeEdit} />
          <Route path="/Shoes/Delete" exact component={ShoeDelete} />
          <Route path="/Shoes/Show" exact component={ShoeShow} />
          <Route path="/Shoes/List" exact component={ShoeList} />
          <Route path="/AdminXp2Q" exact component={GoogleAuth} />
        </div>
      </Router>
    </div>
  );
};
export default App;
