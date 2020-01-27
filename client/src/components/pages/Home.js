import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import Sky from "../modules/Sky.js"
import Constellation from "../modules/Constellation.js"
import NavBar from "../modules/NavBar.js"

import {Slideshow} from "./slideshow.js"

import "../../utilities.css";
import "./Home.css";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "201457722316-pqqtv96dl1ib3oschj9lde0l0f0mdlph.apps.googleusercontent.com";

class Home extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {};
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    return (
      <div className="u-scroll"> 
        <section>
          <div className="main">
            <div className="title">
              ASTRA
            </div>
            <div className="quote">
              reach for the stars
            </div>
            {/* <img src="lowquality.jpg" className="constellation-image"/>  */}
          </div>
        </section>
        <section>  
          <div className="instructions-block">
              <div className="instructions-title">
                <br></br>
                  tutorial
              </div>
              <div className="instructions">
                <div>
                {/* {Slideshow()} */}
                </div>
              </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
