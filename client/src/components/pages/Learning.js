import React, {Component} from "react"
import LearningSky from "../modules/LearningSky.js"
import LearningSideBar from "../modules/LearningSideBar.js"
import { constelledges } from "../modules/constellationedges.js";
import { starlocs } from "../modules/starlocations.js";

class Learning extends Component{
    constructor(props){
        super(props)
        this.state = {
            fixedConstellations : [],
            constellationNames : [],
            stars: [],
            clickedConstell: []
        }
    }

    processConstEdge = () => {
        this.setState({
            fixedConstellations: Object.values(constelledges),
        });
    }

    processStarLoc = () => {
        this.setState({
            stars: starlocs
        })

    }

    processConstName = () => {
        this.setState({
            constellationNames : Object.keys(constelledges),
        });
    }

    constellGlow = (constellName) =>{
        console.log(constellName);
        this.setState({
            clickedConstell: constelledges[constellName]
            
        }); 
    }

    componentDidMount(){
        this.processConstEdge();
        this.processConstName();
        this.processStarLoc();
    }


    render(){
        return(  
            <div className="u-flexRow">
                <div className="Learning-learningSideBar">
                    <LearningSideBar constellationNames={this.state.constellationNames}
                     constellGlow={this.constellGlow}
                    />
                </div>
                <div>
                    <LearningSky learning={true} fixedConstellations={this.state.fixedConstellations}
                    clickedConstell = {this.state.clickedConstell}/>
                </div>
            </div>           
        );
    
    }
}

export default Learning;