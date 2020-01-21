import React, {Component, useReducer} from "react"

import "../../utilities.css";
import "./ProfileSkyBox.css";

class ProfileSkyBox extends Component{
    constructor(props){
        super(props)
        
    }


    componentDidMount(){
        
    }


    render(){
        return(
            <>
                <div className="ProfileSkyBox-body">
                    {/* {this.props.skyId} */}
                    {this.props.name}
                </div>
            </>
        );
    }
}

export default ProfileSkyBox;