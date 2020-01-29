import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import Sky from "../modules/Sky.js"
import Constellation from "../modules/Constellation.js"
import NavBar from "../modules/NavBar.js"

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
        {/* <h1>Good luck on your project :)</h1>

          <h2> What we provide in this skeleton</h2>
        <ul>
          <li>Google Auth (Skeleton.js & auth.js)</li>
          <li>Socket Infrastructure (client-socket.js & server-socket.js)</li>
          <li>User Model (auth.js & user.js)</li>
        </ul>
        <h2> What you need to change</h2>
        <ul>
          <li>Change the font in utilities.css</li>
          <li>Change the Frontend CLIENT_ID for Google Auth (Skeleton.js)</li>
          <li>Change the Server CLIENT_ID for Google Auth (auth.js)</li>
          <li>Change the Database SRV for Atlas (server.js)</li>
          <li>Change the Database Name for MongoDB (server.js)</li>
          <li>Add a favicon to your website at the path client/dist/favicon.ico</li>
          <li>Update website title in client/dist/index.html</li>
        </ul>
        {/* <Constellation></Constellation> */}
        <section className="whole">
          <div className="main">
            <div className="title">
              ASTRA
            </div>
            <div className="quote">
              reach for the stars
            </div>
            {/* <img src="./nightsky.jpg" className="constellation-image"/>  */}
          </div>
        </section>
        <section>  
          <div className="instructions-block">
            <div className="instructions-title">
              Instructions
            </div>

            <div className="instructions">
              Explore learning mode, where you can learn the names of all the constellations! Zooming and panning is enabled in learning mode; use the scroll wheel to zoom and mouse down to pan.
            </div>

            <div className="instructions">
              Login to access creative mode and your profile, where you can create new constellations and skies and save them to revisit later!
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
