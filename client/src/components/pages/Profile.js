import React, {Component} from "react"

import "../../utilities.css";
import "./Profile.css";
import ProfileSideBar from "../modules/ProfileSideBar.js"

class Profile extends Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    
    componentDidMount(){
        
    }


    render(){
        return(
            <>
                <ProfileSideBar name={this.props.name}/>
            </>
        );
    }
}

export default Profile;