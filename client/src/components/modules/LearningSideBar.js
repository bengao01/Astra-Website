import React, {Component} from "react"
import { render } from 'react-dom';

import "../../utilities.css";
import "./LearningSideBar.css";

class LearningSideBar extends Component{
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
            <div className="LearningSideBar-body">
                <div className="LearningSideBar-content" >
                    <div className="LearningSideBar-constellationName">
                        {this.props.constellationNames.map((name) =>
                            <div>{name}</div>
                        )}
                    </div>                 
                </div>
            </div>
            </>
        );
    }
}

export default LearningSideBar;