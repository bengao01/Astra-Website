import React, {Component} from "react"
import { render } from 'react-dom';
import LearningSideBar2 from "./LearningSideBar2.js"

import "../../utilities.css";
import "./LearningSideBar.css";

class LearningSideBar extends Component{
    constructor(props){
        super(props)
        this.state = {
            isCollapse: true
        }
    }

    collapse = ()=>{
        this.setState({
            isCollapse: true
        });
    }

    uncollapse = ()=>{
        this.setState({
            isCollapse: false
        });
    }


    
    componentDidMount(){


    }

    // writeSomething = (name) => {
    //     this.props.constellGlow(name)
    // }

    render(){
        if (this.state.isCollapse){
        return(
            <>
            <div className="LearningSideBar-body">
                <div className="LearningSideBar-content" >
                    Click on a constellation to learn more!
                    <div className="LearningSideBar-constellationName">
                        {this.props.constellationNames.map((name) =>
                            <div onClick={()=>this.uncollapse()}>
                            <div className ="NameSpace" onClick={()=>this.props.constellGlow(name)} >                            
                                {this.props.clickedName !== name && 
                                    <div className="indivName">
                                        {name} 
                                    </div>}
                                {this.props.clickedName === name && 
                                    <div className="highlightName">
                                        {name} 
                                    </div>}
                            </div>
                            </div>
                        )}
                    </div>                 
                </div>
            </div>
            </>
        )}
        if(!this.state.isCollapse){
        return(
            <div className="LearningSideBar-second">
                    <LearningSideBar2
                        clickedName = {this.props.clickedName}
                        isCollapse = {this.state.isCollapse}
                        collapse = {this.collapse}
                        uncollapse = {this.uncollapse}
                    />
            </div>
        );
    }}
}

export default LearningSideBar;