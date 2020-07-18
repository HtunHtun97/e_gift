import React from "react";
import "./Header.css";

const header = (props) => (
  <header className="header">
    <div>Today exchange rate</div>
    <div style={{ color: "red" }}>1USD = 1,470 MMK</div>
  </header>
);

export default header;
