import React, {Component} from "react"
import { render } from 'react-dom';

import "../../utilities.css";
import "./ProfileSkySideBar.css";

class ProfileSkySideBar extends Component{
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
            <div className="ProfileSkySideBar-body">
                <div className="ProfileSkySideBar-content" >
                    <div>Welcome to your sky!</div>
                    <div>Your Constellations:</div>
                </div>

                <div>
                    {this.props.savedConstellations.map((constellation) => 
                            <div className="ProfileSkySideBar-constellationName">{constellation.name}</div>
                    )}
                </div>

                {/* map the sky array and display the sky names on the */}
            </div>
            </>
        );
    }
}

export default ProfileSkySideBar;