import React from "react";
import { Route } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Home from "./containers/Home/Home";
import Shop from "./containers/Shop/Shop";

function App() {
  return (
    <div>
      <Layout>
        <Route path="/" exact render={(props) => <Home {...props} />} />
        <Route path="/:id" render={(props) => <Shop {...props} />} />
      </Layout>
    </div>
  );
}

export default App;
