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
            console.log("post sky")
                .then((sky) => {
                    get("/api/sky", { name: "", creator: sky.creator})
                console.log("get sky 2")
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


    render(){
        return(
            <>
                <div className="u-flexRow Creative-body">
                    <div className="Creative-creativeSideBar">
                        <CreativeSideBar newConstellation={this.state.newConstellation} resetNewConstellation={this.resetNewConstellation} skyId={this.state.skyId}/>
                        {console.log(this.state.skyId)}
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