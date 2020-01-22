import React, {Component} from "react"

import "../../utilities.css";
import "./ProfileSky.css";
import ProfileSkySideBar from "../modules/ProfileSkySideBar.js"
import SavedSky from "../modules/SavedSky.js"
import ProfileSkyBox from "../modules/ProfileSkyBox.js"
import {get} from "../../utilities"
import { post } from "../../utilities";


class ProfileSky extends Component{
    constructor(props){
        super(props)
        this.state = {
            savedConstellations: [],
        }
    }


    
    componentDidMount(){
        // get saved sky and set state to equal the edges of the sky
        get("/api/constellation", {sky_id: this.props.skyId}).then((constellation) => {
            this.setState({
                savedConstellations: constellation,
            });
        });
    }


    render(){
        if(!this.state.savedConstellations){
            return(<div>LOADING!</div>)
        }
        return(
            <>
            <div className="Profile-container">
                <div className="Profile-ProfileBar">
                    <ProfileSkySideBar className="ProfileSkySideBar-body" savedConstellations={this.state.savedConstellations}/>
                </div>
                <div>
                    <SavedSky name={this.props.userName} skyId={this.props.skyId} savedConstellations={this.state.savedConstellations}/>
                </div>
            </div>
            </>
        );
    }
}

export default ProfileSky;