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
        let date = new Date(this.props.time).toDateString();
        return(
            <>
                <div className="ProfileSkyBox-container" onClick={this.changePage}>
                        {/* {this.props.skyId} */}
                        <div className="ProfileSkyBox-body">
                            <div className="ProfileSkyBox-subbody">
                                <Link className="Link"to={`/profilesky/${this.props.skyId}`}>
                                    {name}
                                </Link>
                                
                                <div className="ProfileSkyBox-date">
                                    {date}
                                </div>
                            </div>

                            <button className="delete"onClick={this.deleteSky}>
                                X
                            </button>
                        </div>     
                </div>
            </>
        );
    }
}

export default ProfileSkyBox;