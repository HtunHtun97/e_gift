import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Header from "../../components/Header/Header";
import CardList from "../../components/Cards/CardList/CardList";

class Home extends Component {
  render() {
    return (
      <Auxiliary>
        <Header />
        <CardList {...this.props} />
      </Auxiliary>
    );
  }
}

export default Home;
