import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import ShoeCreate from "./shoes/ShoeCreate";
import ShoeEdit from "./shoes/ShoeEdit";
import ShoeDelete from "./shoes/ShoeDelete";
import ShoeList from "./shoes/ShoeList";
import ShoeShow from "./shoes/ShoeShow";
import HomePage from "./HomePage";
import Header from "./Header";
import history from "../history";
import AdminPage from "./AdminPage";
import Checkout from "./Checkout";
import Success from "./Success";
import SaleConfirmation from "./SaleConfirmation";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/success" exact component={Success} />
            <Route path="/AdminXp2Q/Shoes/new" exact component={ShoeCreate} />
            <Route path="/Shoes/List" exact component={ShoeList} />
            <Route path="/checkout" exact component={Checkout} />
            <Route
              path="/saleconfirmation"
              exact
              component={SaleConfirmation}
            />
            <Route
              path="/AdminXp2Q/Shoes/Delete/:id"
              exact
              component={ShoeDelete}
            />
            <Route
              path="/AdminXp2Q/Shoes/edit/:id"
              exact
              component={ShoeEdit}
            />
            <Route path="/AdminXp2Q/Shoes/List" exact component={ShoeList} />
            <Route path="/AdminXp2Q" component={AdminPage} />
            <Route path="/Shoes/:id" exact component={ShoeShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};
export default App;
