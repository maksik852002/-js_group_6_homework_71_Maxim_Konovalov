import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import CreareDishesForm from "./components/CreateDishesForm/CreateDishesForm";
import Dishes from "./containers/Dishes/Dishes";
import Orders from "./containers/Orders/Orders";

const App = () => (
  <Layout>
    <Switch>
      <Route path="/" exact component={Dishes} />
      <Route path="/create" component={CreareDishesForm} />
      <Route path="/:id/edit" component={CreareDishesForm} />
      <Route path="/orders" component={Orders} />
      <Route render={() => <h1>Not found</h1>} />
    </Switch>
  </Layout>
);

export default App;
