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
                <div>
                    <div className="ConstellationsBlock-title">Your Constellation Names:</div>
                </div>
                <div className="ConstellationsBlock-names">
                    {this.props.constellationNames.map((constellation) => 
                            <div className="ConstellationsBlock-name">{constellation}
                            </div>
                    )}
                </div>
            </div>
            </>
        );
    }
}

export default ConstellationsBlock;