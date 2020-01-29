import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import Sky from "../modules/Sky.js"
import Constellation from "../modules/Constellation.js"
import NavBar from "../modules/NavBar.js"
import Carousel from "./tutorial.js"


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
        <section className="whole">
        <section>
          <div class="galaxy">
          <div className="main">
            <div className="title">
              ASTRA
            </div>
            <div className="quote">
              rewrite the stars
            </div>
          </div>
          </div>
        </section>
        </section>
        <section>  
          <div className="instructions-block">
              <div className="instructions-title">
                <br></br>
                  Tutorial
              </div>
              <div className="instructions">
              <div >
                <Carousel
                />
              </div>
              </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
