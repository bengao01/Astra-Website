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
            clickedConstell: [],
            clickedConstellStar: []
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
        let norepeat = []
        
        constelledges[constellName].map((edge) => {
            let first = edge[0] + "," + (edge[1])
            let second = (edge[2]) + "," + (edge[3])
            if (!norepeat.includes(first)){
                norepeat.push(first);
            }
            if (!norepeat.includes(second)){
                norepeat.push(second);
            }
        });
        let norepeatFinal = []
        norepeat.map((star) => {
            let star_str = star.split(",")
            norepeatFinal.push([parseInt(star_str[0]), parseInt(star_str[1])])
        })
        this.setState({
            clickedConstellStar: norepeatFinal
        }); 
        console.log(constellName)
        this.setState({
            clickedConstell: constelledges[constellName],
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
                    <LearningSideBar
                        constellationNames={this.state.constellationNames}
                        constellGlow={this.constellGlow}
                    />
                </div>
                <div>
                    <LearningSky
                        learning={true}
                        fixedConstellations={this.state.fixedConstellations}
                        clickedConstell = {this.state.clickedConstell}
                        clickedConstellStar = {this.state.clickedConstellStar}
                    />
                </div>
            </div>           
        );
    
    }
}

export default Learning;