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

    componentWillUnmount(){
        post("/api/deleteSky", {sky_id : this.state.skyId, name: ""});
    }

    componentDidMount(){
        post("/api/sky", {name: ""}) 
        .then((sky) => {
            this.setState({
                skyId: sky._id,
            })
        })
    }

    changeId = (Id) => {
        this.setState({
            skyId : Id,
        });
    }

    resetGlow = () => {
        this.setState({
            clickedConstell : [],
            clickedConstellStar : [],
        })
    }

    noConstellations = () => {
        return this.state.constellationNames.length === 0 ? true : false;
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

    deleteSavedConstellation = (constellationName) => {
        post("api/deleteConstellation", {name: constellationName, sky_id: this.state.skyId});
        // delete from newConstellations and from the database
        let index = this.state.constellationNames.indexOf(constellationName);
        console.log("index" + index);
        // this.state.constellationNames.splice(index);
        // this.state.newConstellations.splice(index, )
        if (index == 0) {
            let length = this.state.constellationLengths[index];
            let constellationNamesTemp = this.state.constellationNames;
            constellationNamesTemp.splice(index, 1);
            let newConstellationsTemp = this.state.newConstellations;
            newConstellationsTemp.splice(index, length);
            let constellationLengthsTemp = this.state.constellationLengths;
            constellationLengthsTemp.splice(index, 1);

            this.setState({
                constellationNames : constellationNamesTemp,
                newConstellations : newConstellationsTemp,
                clickedConstell : [],
                clickedConstellStar : [],
                constellationLengths : constellationLengthsTemp,
                // newConstells : this.state.newConstells.
            });

            // delete this.state.newConstells.constellationName;
            console.log("newConstellations" + this.state.newConstellations);
            console.log("length" + length);
        } else {
            post("api/deleteConstellation", {name: constellationName, sky_id: this.state.skyId});
            let length = this.state.constellationLengths[index];
            // let constellationLengthsTempOne = this.state.constellationLengths;
            // let prevLengths = constellationLengthsTempOne.splice(0, index); // need to accumlate all prev lengths
            let prevLength = 0;
            // prevLengths.map((len) => 
            //     prevLength += len
            // )
            for (let i=0; i<index; i++) {
                // prevLength += constellationLengthsTempOne[i];
                prevLength += this.state.constellationLengths[i];
            }
            let constellationNamesTemp = this.state.constellationNames;
            constellationNamesTemp.splice(index, 1);
            console.log("constellationNamesTemp " + constellationNamesTemp)
            let newConstellationsTemp = this.state.newConstellations;
            console.log("newConstellationsTemp " + newConstellationsTemp)
            newConstellationsTemp.splice(prevLength, length);
            console.log("newConstellationsTemp updated " + newConstellationsTemp)
            let constellationLengthsTempTwo = this.state.constellationLengths;
            constellationLengthsTempTwo.splice(index, 1);
            console.log("constellationLengthsTempTwo " + constellationLengthsTempTwo)

            this.setState({
                constellationNames : constellationNamesTemp,
                newConstellations : newConstellationsTemp,
                clickedConstell : [],
                clickedConstellStar : [],
                constellationLengths : constellationLengthsTempTwo,
                // newConstells : this.state.newConstells.
            });
        }
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
            return (<div className="loading">loading...</div>)
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
                            noConstellations={this.noConstellations}
                            changeId={this.changeId}
                            deleteSavedConstellation={this.deleteSavedConstellation}
                        />
                    </div>
                    <div className="Creative-sky">
                        <CreativeSky 
                            newConstellations={this.state.newConstellations} 
                            newConstellation={this.state.newConstellation} 
                            updateNewConstellation={this.updateNewConstellation}
                            clickedConstell = {this.state.clickedConstell}
                            clickedConstellStar = {this.state.clickedConstellStar}
                            resetGlow = {this.resetGlow}
                        />
                    </div>
                </div>
            </>
        );
    }
}

export default Creative;