import React, {Component} from "react"
import { render } from 'react-dom';

import "../../utilities.css";
import "./NewConstellationInput.css";

class NewConstellationInput extends Component{
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
            <div className="NewConstellationInput-body">
                <div className="NewConstellationInput-Title">
                    <div>Constellation Name</div>
                    <input type="text" required minLength="1" size="35"/>
                    <div>
                        <button>Save</button>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default NewConstellationInput;