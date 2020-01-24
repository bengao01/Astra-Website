import React, {Component} from "react"

import "../../utilities.css";
import "./ProfileSky.css";
import ProfileSkySideBar from "../modules/ProfileSkySideBar.js"
import SavedSky from "../modules/SavedSky.js"
import ProfileSkyBox from "../modules/ProfileSkyBox.js"
import {get} from "../../utilities"
import { post } from "../../utilities";


class ProfileSky extends Component{
    constructor(props){
        super(props)
        this.state = {
            savedConstellations: [],
            savedConstells: [], // reformats savedConstellations into an object that constellGlow can use
            clickedConstell: [],
            clickedConstellStar : [],
        }
    }


    constellGlow = (constellName) =>{
        // reformat the get request return
        let savedConstell = {};
        {this.state.savedConstellations.map((constellation) => 
            savedConstell[constellation.name] = constellation.edges
        )}
        
        // savedConstell[this.state.savedConstellations.name] = this.state.savedConstellations.edges;

        console.log(savedConstell);

        this.setState ({
            savedConstells : Object.assign(this.state.savedConstells, savedConstell),
        });

        console.log(this.state.savedConstells);
        console.log(constellName);

        let norepeat = []
        
        this.state.savedConstells[constellName].map((edge) => {
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
        console.log(this.state.clickedConstellStar);
        this.setState({
            clickedConstell: this.state.savedConstells[constellName],
        });
        console.log(this.state.clickedConstell);
    }

    componentDidMount(){
        // get saved sky and set state to equal the edges of the sky
        get("/api/constellation", {sky_id: this.props.skyId}).then((constellation) => {
            this.setState({
                savedConstellations: constellation,
            });
        });

        // // reformat the get request return
        // let savedConstell = {};
        // savedConstell[this.state.savedConstellations.name] = this.state.savedConstellations.edges;

        // console.log(savedConstell);


    }


    render(){
        if(!this.state.savedConstellations){
            return(<div>LOADING!</div>)
        }
        return(
            <>
            <div className="Profile-container">
                <div className="Profile-ProfileBar">
                    <ProfileSkySideBar
                        className="ProfileSkySideBar-body"
                        savedConstellations={this.state.savedConstellations}
                        constellGlow={this.constellGlow}
                    />
                </div>
                <div>
                    <SavedSky
                        name={this.props.userName}
                        skyId={this.props.skyId}
                        savedConstellations={this.state.savedConstellations}
                        clickedConstell={this.state.clickedConstell}
                        clickedConstellStar={this.state.clickedConstellStar}
                    />
                </div>
            </div>
            </>
        );
    }
}

export default ProfileSky;