import React from "react";
import Auxiliary from "../Auxiliary/Auxiliary";
import "./Layout.css";

const Layout = (props) => {
  return (
    <Auxiliary>
      <main className="Content">{props.children}</main>
    </Auxiliary>
  );
};

export default Layout;
