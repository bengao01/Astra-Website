import React, {Component} from "react"
import { render } from 'react-dom';
import NewConstellationInput from "./NewConstellationInput.js";
import NewSkyInput from "./NewSkyInput.js";
import ConstellationsBlock from "./ConstellationsBlock.js";

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
                <NewConstellationInput />
                <NewSkyInput />
                <ConstellationsBlock />
            </div>
            </>
        );
    }
}

export default CreativeSideBar;