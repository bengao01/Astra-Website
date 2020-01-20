import React, {Component} from "react"
import CreativeSky from "../modules/CreativeSky.js"
import CreativeSideBar from "../modules/CreativeSideBar.js"

import "../../utilities.css";
import "./Creative.css";

class Creative extends Component{
    constructor(props){
        super(props)
        this.state = {
            //the set of saved constellations in the current sky
            newConstellations : [],
            //the current constellation the user is making
            newConstellation : [],
        }
        
    }

    
    componentDidMount(){
        
    }

    updateNewConstellation = (edge) => {
        this.setState({
            newConstellation : this.state.newConstellation.concat([edge]),
        });
        console.log("update new constellation");
    }

    resetNewConstellation = () => {
        this.setState({
            newConstellations : this.state.newConstellations.concat(this.state.newConstellation),
            newConstellation: [],
        });
        console.log("reset new constellation");
    }


    render(){
        return(
            <>
                <div className="u-flexRow Creative-body">
                    <div className="Creative-creativeSideBar">
                        <CreativeSideBar newConstellation={this.state.newConstellation} resetNewConstellation={this.resetNewConstellation}/>
                    </div>
                    <div className="Creative-sky">
                        <CreativeSky newConstellations={this.state.newConstellations} newConstellation={this.state.newConstellation} updateNewConstellation={this.updateNewConstellation}/>
                    </div>
                </div>
            </>
        );
    }
}

export default Creative;