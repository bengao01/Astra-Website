import React, {Component, useReducer} from "react"
import CreativeSky from "../modules/CreativeSky.js"
import CreativeSideBar from "../modules/CreativeSideBar.js"

import "../../utilities.css";
import "./Creative.css";
// import { get } from "mongoose";
import { get } from "../../utilities.js";
import { post } from "../../utilities.js";

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
            constellationNames: [],
            name : "",
            skyId : "",
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
                            skyId={this.state.skyId}/>
                    </div>
                    <div className="Creative-sky">
                        <CreativeSky 
                            newConstellations={this.state.newConstellations} 
                            newConstellation={this.state.newConstellation} 
                            updateNewConstellation={this.updateNewConstellation}
                        />
                    </div>
                </div>
            </>
        );
    }
}

export default Creative;