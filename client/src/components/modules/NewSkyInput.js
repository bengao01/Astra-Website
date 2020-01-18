import React, {Component} from "react"
import { render } from 'react-dom';

import "../../utilities.css";
import "./NewSkyInput.css";

class NewSkyInput extends Component{
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
            <div className="NewSkyInput-body">
                <div className="NewSkyInput-Title">
                    <div>Sky Name</div>
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

export default NewSkyInput;