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
            <div className="CreativeSideBar-body">
                <NewConstellationInput 
                    newConstellation={this.props.newConstellation} 
                    resetNewConstellation={this.props.resetNewConstellation} 
                    deleteUnsavedConstellation={this.props.deleteUnsavedConstellation}
                    skyId={this.props.skyId}
                    constellationNames={this.props.constellationNames}
                    updateConstellationNames={this.props.updateConstellationNames}
                />
                {/* {console.log(this.props.skyId)} */}
                <NewSkyInput 
                    resetNewConstellations={this.props.resetNewConstellations} 
                    skyId={this.props.skyId}
                    noConstellations={this.props.noConstellations}
                />
                <ConstellationsBlock 
                    newConstellations={this.props.newConstellations}
                    constellationNames={this.props.constellationNames}
                    constellGlow={this.props.constellGlow}
                />
            </div>
        );
    }
}

export default CreativeSideBar;