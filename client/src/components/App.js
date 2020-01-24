import React, { Component } from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import Home from "./pages/Home.js";
import Creative from "./pages/Creative.js"
import Learning from "./pages/Learning.js"
import NavBar from "./modules/NavBar.js"
import Profile from "./pages/Profile.js"
import ProfileSky from "./pages/ProfileSky.js"

import "../utilities.css";

import { socket } from "../client-socket.js";

import { get, post } from "../utilities";

/**
 * Define the "App" component as a class.
 */
class App extends Component {
  // makes props available in this component
  constructor(props) {
    super(props);
    this.state = {
      userId: undefined,
      userName : undefined,
      skyObjs: [],
    };
  }

  componentDidMount() {
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registed in the database, and currently logged in.
        this.setState({ 
          userId: user._id,
          userName : user.name,
        });
        this.retrieveAllSkies();
      }
    });
  //   .then(() => { 
  //     console.log("getting all skies")
  //     get("/api/allSkies").then((allSkies) => {
  //     this.setState({
  //         skyObjs : allSkies,
  //     });
  //   });
  //   });
  }

  retrieveAllSkies = () => {
    get("/api/allSkies").then((allSkies) => {
      this.setState({
          skyObjs : allSkies,
      });
    });
  }

  handleLogin = (res) => {
    console.log(`Logged in as ${res.profileObj.name}`);
    const userToken = res.tokenObj.id_token;
    post("/api/login", { token: userToken }).then((user) => {
      this.setState({ 
          userId: user._id,
          userName : user.name,
      });
      post("/api/initsocket", { socketid: socket.id });
      this.retrieveAllSkies();
      // get("/api/allSkies").then((allSkies) => {
      //   this.setState({
      //       skyObjs : allSkies,
      //   });
      // });
    });
  };

  handleLogout = () => {
    this.setState({ userId: undefined });
    post("/api/logout");
  };

  render() {
    if(!this.state.skyObjs){
      return(<div>LOADING!</div>)
    }

    return (
      <div className="fillPage">
        <NavBar
          handleLogin={this.handleLogin}
          handleLogout={this.handleLogout}
          userId={this.state.userId}
        />
        <Router primary={false} className="u-fillParent">
          <Home
            path="/"
            handleLogin={this.handleLogin}
            handleLogout={this.handleLogout}
            userId={this.state.userId}
          />
          <Creative
            path="/creative"
          />
          <Learning
            path="/learning"
          />
          <Profile
            path={`/profile/${this.state.userId}`}
            name={this.state.userName}
            skyObjs={this.state.skyObjs}
          />
          {this.state.skyObjs.map((sky) => 
              (<ProfileSky
                path={`/profilesky/${sky._id}`}
                name={this.state.userName}
                // skyObjs={this.state.skyObjs}
                skyId={sky._id}
              />)
          )}

          <NotFound default />
        </Router>
      </div>
    );
  }
}

export default App;
