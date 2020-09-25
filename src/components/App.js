import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import ShoeCreate from "./shoes/ShoeCreate";
import ShoeEdit from "./shoes/ShoeEdit";
import ShoeDelete from "./shoes/ShoeDelete";
import ShoeList from "./shoes/ShoeList";
import ShoeShow from "./shoes/ShoeShow";
import HomePage from "./HomePage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="ui container">
          <Route path="/" exact component={HomePage} />
          <Route path="/Shoes/new" exact component={ShoeCreate} />
          <Route path="/Shoes/edit" exact component={ShoeEdit} />
          <Route path="/Shoes/Delete" exact component={ShoeDelete} />
          <Route path="/Shoes/Show" exact component={ShoeShow} />
          <Route path="/Shoes/List" exact component={ShoeList} />
        </div>
      </BrowserRouter>
    </div>
  );
};
export default App;

// const App = () => {
//   return (
//     <div className="ui container">
//       <ShoeList />
//     </div>
//   );
// };
