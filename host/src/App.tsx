import React from "react";
import ReactDOM from "react-dom";
import Counter from "remote/Counter";
import Navbar from "navbar/Navbar";
import Body from "body/Body";
import Footer from "footer/Footer";
import "./index.scss";

const style = {
  height: "100vh",
  border: "1px solid black",
  display: "flex",
  flexDirection: "column",
};

const App = () => (
  <>
    <div>
      <Navbar />
      <Body />
      <Footer />
    </div>
    '
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
