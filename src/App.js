import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import { Route, Switch } from "react-router-dom";
import "./App.css";

const HatsPage = props => {
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
};

function App(props) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/hats" component={HatsPage}></Route>
        <Route exact path="/shop" component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
