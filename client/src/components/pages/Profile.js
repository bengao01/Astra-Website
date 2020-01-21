import React, {Component} from "react"

import "../../utilities.css";
import "./Profile.css";
import ProfileSideBar from "../modules/ProfileSideBar.js"
import ProfileSky from "../modules/ProfileSky.js"
import {get} from "../../utilities"
import { post } from "../../utilities";


class Profile extends Component{
    constructor(props){
        super(props)
        this.state = {
            skyObjs : [],
        }
    }


    
    componentDidMount(){
        get("/api/allSkies").then((allSkies) => {
            this.setState({
                skyObjs : allSkies,
            });
        });
    }


    render(){
        if(!this.state.skyObjs){
            return(<div>LOADING!</div>)
        }

        return(
            <>
                <div className="Profile-container">
                    <div className="Profile-ProfileBar">
                        <ProfileSideBar className="ProfileSideBar-body" name={this.props.name}/>
                    </div>
                    
                    <div className="Profile-ProfileSky">
                        {this.state.skyObjs.map((sky) => 
                            <ProfileSky skyId={sky._id}/>
                        )}

                    </div>
                </div>
                
            </>
        );
    }
}

export default Profile;