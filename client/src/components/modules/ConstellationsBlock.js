import React, {Component} from "react"
import { render } from 'react-dom';

import "../../utilities.css";
import "./ConstellationsBlock.css";

class ConstellationsBlock extends Component{
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
                <div>
                    <div className="ConstellationsBlock-title">Your Constellation Names:</div>
                </div>
            <div className="ConstellationsBlock-NameContainer">
                <div className="ConstellationsBlock-names">
                    {this.props.constellationNames.map((constellation) => 
                            <div>
                            <span onClick={()=>this.props.constellGlow(constellation)} className="ConstellationsBlock-name" >
                                {constellation + " "}
                            </span>
                            <button
                                type="submit"
                                value="Submit"
                                className="u-pointer btn btn-danger btn:hover"
                                onClick={()=>this.props.deleteSavedConstellation(constellation)}
                                >
                                    X
                            </button>
                            </div>
                    )}
                </div>
            </div>
            </>
        );
    }
}

export default ConstellationsBlock;