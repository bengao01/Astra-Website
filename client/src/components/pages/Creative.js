import React, {Component, useReducer} from "react"
import CreativeSky from "../modules/CreativeSky.js"
import CreativeSideBar from "../modules/CreativeSideBar.js"

import "../../utilities.css";
import "./Creative.css";
// import { get } from "mongoose";
import { get } from "../../utilities.js";
import { post } from "../../utilities.js";
import ConstellationsBlock from "../modules/ConstellationsBlock.js";

// const mongoose = require("mongoose");
// const ObjectId = mongoose.Schema.Types.ObjectId;

class Creative extends Component{
    constructor(props){
        super(props)
        this.state = {
            //the set of saved constellations in the current sky
            newConstellations : [],
            //the current constellation the user is making
            newConstellation : [],
            constellationLengths: [], // gather the lengths of the constellations
            constellationNames: [],
            newConstells : {},
            name : "",
            skyId : "",
            clickedConstell: [],
            clickedConstellStar : [],
        }
    }


    componentDidMount(){
        get("/api/sky", {name: ""})
            .then((sky) => {
            this.setState({
                skyId: sky._id,
            })
            console.log("get sky with name empty")
            console.log(this.state.skyId)
        })
        .catch((error) => {
            post("/api/sky", {name: ""}) 
            .then((sky) => {
                get("/api/sky", { name: "", creator: sky.creator})
                    .then((sky) => {
                        this.setState({
                            skyId: sky._id,
                        })
                    })
                })
            });
    }


    updateNewConstellation = (edge) => {
        this.setState({
            newConstellation : this.state.newConstellation.concat([edge]),
        });
        console.log("update new constellation");
    }


    resetNewConstellation = () => {
        let newConstell = {};
        newConstell[this.state.name] = this.state.newConstellation;

        this.setState({
            constellationLengths : this.state.constellationLengths.concat(this.state.newConstellation.length),
            // newConstells : this.state.newConstells.concat(this.state.name : this.state.newConstellation),
            newConstells : Object.assign(this.state.newConstells, newConstell),
            newConstellations : this.state.newConstellations.concat(this.state.newConstellation),
            newConstellation: [],
        });
        console.log("reset new constellation");
    }

    resetNewConstellations = () => {
        this.setState({
            newConstellations : [],
            newConstellation: [],
            constellationNames: [],
            newConstells : {},
            clickedConstell: [],
            clickedConstellStar : [],
        });
    }

    deleteUnsavedConstellation = () => {
        this.setState({
            newConstellation : [],
        });
    }

    updateConstellationNames = (newName) => {
        this.setState({
            name: newName,
            constellationNames : this.state.constellationNames.concat(newName),
        });
        console.log("update constellation names");
    }

    constellGlow = (constellName) =>{
        let norepeat = []
        
        this.state.newConstells[constellName].map((edge) => {
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
            clickedConstell: this.state.newConstells[constellName],
        });
        
    }

    render(){
        if(!this.state.skyId){
            return (<div>loading</div>)
        }
        return(
            <>
                <div className="u-flexRow Creative-body">
                    <div className="Creative-creativeSideBar">
                        <CreativeSideBar 
                            newConstellation={this.state.newConstellation} 
                            newConstellations={this.state.newConstellations}
                            constellationNames={this.state.constellationNames}
                            resetNewConstellation={this.resetNewConstellation}
                            resetNewConstellations={this.resetNewConstellations} 
                            deleteUnsavedConstellation={this.deleteUnsavedConstellation}
                            updateConstellationNames={this.updateConstellationNames}
                            skyId={this.state.skyId}
                            constellGlow={this.constellGlow}
                        />
                    </div>
                    <div className="Creative-sky">
                        <CreativeSky 
                            newConstellations={this.state.newConstellations} 
                            newConstellation={this.state.newConstellation} 
                            updateNewConstellation={this.updateNewConstellation}
                            clickedConstell = {this.state.clickedConstell}
                            clickedConstellStar = {this.state.clickedConstellStar}
                        />
                    </div>
                </div>
            </>
        );
    }
}

export default Creative;