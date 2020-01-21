import React, {Component, useReducer} from "react";
import { Link } from "@reach/router";

import "../../utilities.css";
import "./ProfileSkyBox.css";

class ProfileSkyBox extends Component{
    constructor(props){
        super(props)
        
    }


    componentDidMount(){
        
    }

    // changePage = () => {
    //     <Link to={`/profilesky/${this.props.skyId}`}>
    //     </Link>
    // }


    render(){
        return(
            <>
                <div className="ProfileSkyBox-body" onClick={this.changePage}>
                        {/* {this.props.skyId} */}
                        <Link to={`/profilesky/${this.props.skyId}`}>
                            {this.props.name}
                        </Link>
                </div>
            </>
        );
    }
}

export default ProfileSkyBox;