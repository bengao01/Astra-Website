import React, {Component} from "react"
import { render } from 'react-dom';

import "../../utilities.css";
import "./NewSkyInput.css";
import { get, post } from "../../utilities";

class NewSkyInput extends Component{
    constructor(props){
        super(props)
        this.state = {
            value: "",
        };
    }

    // Called when the user types in the new sky box
    handleChange = (event) => {
        this.setState({
            value: event.target.value,
        });
        console.log("handle sky change");
    };
        
    // Called when the user hits "Save" for a new sky
    handleSubmit = async (event) => {
        if(this.state.value !== "" && this.props.noConstellations() === false){
            event.preventDefault();
            this.props.resetNewConstellations();
            
            // this.props.onSubmit && this.props.onSubmit(this.state.value);
            await post("/api/updateSky", {_id : this.props.skyId, name : this.state.value, time : Date.now()});
                
            await post("/api/sky", {name: ""}) 
            .then((sky) => {
                this.props.changeId(sky._id)
            });

            this.setState({
                value: "",
            });
        
            console.log("handle sky submit");
        }
        else if(this.props.noConstellations()){
            alert("Please create constellations first!");
        }
        else{
            alert("Please enter a name for your Sky!");
        }
    };

    addSky = (value) => {
        console.log("add sky");
        //this.props.changeSkyName(value, this.props.sky_id);
    };

    componentDidMount(){


    }

    
    render(){
        return(
            <>
            <div className="NewSkyInput-body">
                <div className="NewSkyInput-Title">
                    <div>Sky Name</div>
                    <input
                        type="text"
                        required minLength="1"
                        size="35"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                    <button
                        type="submit"
                        value="Submit"
                        className="u-pointer btn btn-success"
                        onClick={this.handleSubmit}
                        padding={3}
                        
                    >
                        Save
                    </button>
                </div>
            </div>
            </>
        );
    }
}

export default NewSkyInput;