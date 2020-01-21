import React, {Component, useReducer} from "react"

import "../../utilities.css";
import "./ProfileSky.css";

class ProfileSky extends Component{
    constructor(props){
        super(props)
        
    }


    componentDidMount(){
        
    }


    render(){
        return(
            <>
                <div className="ProfileSky-body">
                    {this.props.skyId}
                </div>
            </>
        );
    }
}

export default ProfileSky;