import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Img1 from "../images/1.jpg";
import Img2 from "../images/2.jpg";
import Img3 from "../images/3.jpg";
import Img4 from "../images/4.jpg";
import Img5 from "../images/5.jpg";
import Img6 from "../images/8.jpg";
import "../styles.scss";
import Navbar from "./Navbar";
import HorizontalScroll from "react-scroll-horizontal";


import Food from "./Food";
import Restaurant from "./Restaurant";
import Propos from "./propos";
import StopMotion from "./StopMotion";
function Home() {
  return (
    <>
      <div className="Container">
        <div className="Row">
          <Router>
            <Navbar />

            <Switch>
              <Route path="/Food" component={Food} exact>
                <Food />
              </Route>

              <Route path="/Restaurant" component={Restaurant} exact>
                <Restaurant />
              </Route>

              <Route path="/Propos" component={Propos} exact>
                <Propos />
              </Route>

              <Route path="/StopMotion" component={StopMotion} exact>
                <StopMotion />
              </Route>

            </Switch>
          </Router>

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
