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
                </div>
            </div>
            </>
        );
    }
}

export default ProfileSkySideBar;