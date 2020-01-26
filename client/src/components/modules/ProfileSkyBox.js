import React, {Component, useReducer} from "react";
import { Link } from "@reach/router";

import "../../utilities.css";
import "./ProfileSkyBox.css";
import { post } from "../../utilities";


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

    deleteSky = () => {
        post("/api/deleteSky", {sky_id : this.props.skyId, name : this.props.name});
        this.props.requestAllSky();
    };

    render(){
        let name = this.props.name === "" ? "Unnamed" : this.props.name;
        return(
            <>
                <div className="ProfileSkyBox-container" onClick={this.changePage}>
                        {/* {this.props.skyId} */}
                        <div className="ProfileSkyBox-body">
                            <Link to={`/profilesky/${this.props.skyId}`}>
                                {name}
                            </Link>
                            <button onClick={this.deleteSky}>
                                X
                            </button>
                        </div>     
                </div>
            </>
        );
    }
}

export default ProfileSkyBox;