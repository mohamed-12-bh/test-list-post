import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserList from "./Component/UserList";
import PostList from "./Component/PostList";
import Details from "./Component/Details";
function App() {
  return (
    <BrowserRouter>
      <div className="card-list">
        <Switch>
          <Route exact path="/" component={UserList} />
          <Route exact path="/posts/:id" component={PostList} />
          <Route exact path="/details/:id" component={Details} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
