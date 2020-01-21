import React, {Component} from "react"
import LearningSky from "../modules/LearningSky.js"
import LearningSideBar from "../modules/LearningSideBar.js"
import { constelledges } from "../modules/constellationedges.js";

class Learning extends Component{
    constructor(props){
        super(props)
        this.state = {
            fixedConstellations : [],
            constellationNames : [],
        }
    }

    processConstEdge = () => {
        this.setState({
            fixedConstellations: Object.values(constelledges),
        });
    }

    processConstName = () => {
        this.setState({
            constellationNames : Object.keys(constelledges),
        });
    }

    componentDidMount(){
        this.processConstEdge();
        this.processConstName();
    }


    render(){
        return(  
            <div className="u-flexRow">
                <div className="Learning-learningSideBar">
                    <LearningSideBar constellationNames={this.state.constellationNames}/>
                </div>
                <div>
                    <LearningSky learning={true} fixedConstellations={this.state.fixedConstellations}/>
                </div>
            </div>           
        );
    
    }
}

export default Learning;