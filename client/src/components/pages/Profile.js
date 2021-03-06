import React, {Component} from "react"

import "../../utilities.css";
import "./Profile.css";
import ProfileSideBar from "../modules/ProfileSideBar.js"
import ProfileSkyBox from "../modules/ProfileSkyBox.js"
import {get} from "../../utilities"
import { post } from "../../utilities";


class Profile extends Component{
    constructor(props){
        super(props)
        this.state = {
            // skyObjs : [],
        }
    }


    
    componentDidMount(){
        this.props.requestAllSky();
    }

    render(){
        // if(!this.state.skyObjs){
        //     return(<div>LOADING!</div>)
        // }

        return(
            <div className="u-scroll">
                <div className="Profile-ProfileNameContainer">
                        <div className="Profile-ProfileNameBody">{`Welcome to your profile ${this.props.name}!`}</div>
                </div>
                <div className="Profile-container">
                    
                    <div className="Profile-ProfileSkyBox">
                        {this.props.skyObjs.map((sky) => 
                            (<ProfileSkyBox skyId={sky._id} name={sky.name} time={sky.time} requestAllSky={this.props.requestAllSky}/>)
                        )}
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Profile;