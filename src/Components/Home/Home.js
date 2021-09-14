import React from "react";
import Header from "../Header/Header";
import "./Home.css";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";


const Home = () => {
  return (
    <div className="home">
      <div className="nogap">
        <Header></Header>
      </div>

      <div className="gap">
        <Body></Body>
      </div>
      
      <div className="nogap">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
