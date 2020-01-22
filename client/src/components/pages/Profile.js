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
        // get("/api/allSkies").then((allSkies) => {
        //     this.setState({
        //         skyObjs : allSkies,
        //     });
        // });
        this.props.retrieveAllSkies;
    }

    render(){
        // if(!this.state.skyObjs){
        //     return(<div>LOADING!</div>)
        // }

        return(
            <>
                <div className="Profile-container">
                    <div className="Profile-ProfileBar">
                        <ProfileSideBar className="ProfileSideBar-body" name={this.props.name}/>
                    </div>
                    
                    <div className="Profile-ProfileSkyBox">
                        {this.props.skyObjs.map((sky) => 
                            (<ProfileSkyBox skyId={sky._id} name={sky.name}/>)
                        )}
                    </div>
                </div>
                
            </>
        );
    }
}

export default Profile;