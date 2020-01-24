import React, {Component} from "react"
import { render } from 'react-dom';

import {constellInfo} from "./constellationinfo.js";
import "../../utilities.css";
import "./LearningSideBar2.css";

class LearningSideBar2 extends Component{
    constructor(props){
        super(props)
        this.state = {
            Info: "Ha",
        }
    }

    displayInfo = () =>{
        console.log(this.props.clickedName)
        if (!this.props.clickedName == ""){
            this.setState({
                Info: constellInfo[this.props.clickedName],
            });
        }
    }


    
    componentDidMount(){
        this.displayInfo();

    }


    render(){
        return(
            <>
            <div className="LearningSideBar2-body">
                <div className="Collapse-button" onClick={()=>this.props.collapse()} >
                    back
                </div>
                <div className="LearningSideBar2-content" >
                    {this.state.Info}
                </div>
            </div>
            </>
        );
    }
}

export default LearningSideBar2;