import React, {Component} from "react"
import { render } from 'react-dom';

import "../../utilities.css";
import "./CreativeSideBar.css";

class CreativeSideBar extends Component{
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
            <div className="CreativeSideBar-body">
                <div className="CreativeSideBar-constellationTitle">
                    Constellation Name:
                </div>
            </div>
            </>
        );
    }
}

export default CreativeSideBar;