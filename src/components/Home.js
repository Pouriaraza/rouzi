import React from "react";
// import $ from "jquery";
import Img1 from "../images/1.jpg";
import Img2 from "../images/2.jpg";
import Img3 from "../images/3.jpg";
import Img4 from "../images/4.jpg";
import Img5 from "../images/5.jpg";
import Img6 from "../images/8.jpg";
import "../styles.scss";
import Header from "./Header";
import HorizontalScroll from "react-scroll-horizontal";

function Home() {
  return (
    <>
      <div className="Container">
        <div className="Row">
        <Header/>
          <HorizontalScroll style={{ height: "100%", width: "100%" }} >
            <div className="Card"><img src={Img6} /></div>
            <div className="Card"><img src={Img2} /></div>
            <div className="Card"><img src={Img3} /></div>
            <div className="Card"><img src={Img5} /></div>
            <div className="Card"><img src={Img4} /></div>
            <div className="Card"><img src={Img1} /></div>
            <div className="Card"><img src={Img2} /></div>
          </HorizontalScroll>
        </div>
      </div>
    </>
  );
}

export default Home;
