import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import PrincipalContentOne from "./Components/PrincipalContentOne";
import PrincipalContentTwo from "./Components/PrincipalContentTwo";
import Footer from "./Components/Footer";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <PrincipalContentOne />
    <PrincipalContentTwo />
    <Footer />
  </React.StrictMode>
);
