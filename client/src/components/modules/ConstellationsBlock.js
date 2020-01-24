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
            <div className="ConstellationsBlock-body">
                <div className="ConstellationsBlock-Title">
                    <div>Your Constellation Names:</div>
                </div>
                <div>
                    {this.props.constellationNames.map((constellation) => 
                            <div onClick={()=>this.props.constellGlow(constellation)}>
                                {constellation}
                            </div>
                    )}
                </div>
            </div>
            </>
        );
    }
}

export default ConstellationsBlock;