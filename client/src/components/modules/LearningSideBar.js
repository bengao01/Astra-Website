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

    // writeSomething = (name) => {
    //     this.props.constellGlow(name)
    // }

    render(){
        return(
            <>
            <div className="LearningSideBar-body">
                <div className="LearningSideBar-content" >
                    <div className="LearningSideBar-constellationName">
                        {this.props.constellationNames.map((name) =>
                            <div onClick={()=>this.props.constellGlow(name)}>
                            {/* onclick={this.props.constellGlow(name)} */}
                                {name} 
                            </div>
                        )}
                    </div>                 
                </div>
            </div>
            </>
        );
    }
}

export default LearningSideBar;