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
            name : "",
            skyId : "",
            clickedConstell : [],
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
        this.setState({
            constellationLengths : this.state.constellationLengths.concat(this.state.newConstellation.length),
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
        });
    }

    deleteUnsavedConstellation = () => {
        this.setState({
            newConstellation : [],
        });
    }

    updateConstellationNames = (newName) => {
        this.setState({
            constellationNames : this.state.constellationNames.concat(newName),
        });
        console.log("update constellation names");
    }
    
    constellGlow = (constellName) => {
        console.log(constellName);
        const index = this.state.constellationNames.indexOf(constellName);
        // console.log(this.state.newConstellations);
        // console.log("index");
        // console.log(index);
        // console.log("index + this.state.constellationLengths[index]");
        // console.log(index + this.state.constellationLengths[index]);
        // console.log("index + this.state.constellationLengths[index-1] + this.state.constellationLengths[index]");
        // console.log(index + this.state.constellationLengths[index-1] + this.state.constellationLengths[index]);

        if (index === 0) {
            this.setState({
                clickedConstell: this.state.newConstellations.slice(index, index + this.state.constellationLengths[index]),
            }); 
        } else {
            // make function to add the values in a range from constellationsLengths
            var totalLength = 0;
            var i;
            console.log("this.state.constellationLengths.length " + this.state.constellationLengths.length);
            for (i=0; i < index; i++) {
                totalLength += this.state.constellationLengths[i];
            }
            console.log("totalLength" + totalLength);
            this.setState({
                clickedConstell: this.state.newConstellations.slice(
                    (totalLength),
                    (totalLength + this.state.constellationLengths[index])
                    // use a map function to go through all the indexes
                    // + this.state.constellationLengths[index
                    ),
            });
            console.log("index + totalLength - 1 " + (index + totalLength - 1));
            console.log("index + totalLength + this.state.constellationLengths[index] -1 " + (index + totalLength + this.state.constellationLengths[index] -1));
        }

        console.log("clickedConstell");
        console.log(this.state.clickedConstell);
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
                        />
                    </div>
                </div>
            </>
        );
    }
}

export default Creative;