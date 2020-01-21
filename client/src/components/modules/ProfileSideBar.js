import React, {Component} from "react"
import { render } from 'react-dom';

import "../../utilities.css";
import "./ProfileSideBar.css";

class ProfileSideBar extends Component{
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
            <div className="ProfileSideBar-body">
                <div className="ProfileSideBar-content" >
                    <div>{`Welcome to your profile ${this.props.name}!`}</div>
                </div>
            </div>
            </>
        );
    }
}

export default ProfileSideBar;