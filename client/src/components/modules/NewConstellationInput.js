import React, {Component} from "react"
import { render } from 'react-dom';

import "../../utilities.css";
import "./NewConstellationInput.css";
import { post } from "../../utilities";


class NewConstellationInput extends Component{
    constructor(props){
        super(props)
        this.state = {
            value: "",
            // newConstellation: this.props.newConstellation,
        };
    }

    // Called when the user types in the new constellation box
    handleChange = (event) => {
        this.setState({
            value: event.target.value,
        });
        console.log("handle constellation change");
    };
        
    // Called when the user hits "Save" for a new constellation
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit && this.props.onSubmit(this.state.value);
        this.addConstellation(this.state.value);
        this.setState({
            value: "",
        });
        console.log("handle constellation submit");
    };

    addConstellation = (value) => {
        // const body = { sky_id: this.props.sky_id, name: constellationName };
        console.log("add constellation");
        const body = {name: value};

        post("/api/constellation", body);
        // post("/api/constellation", body).then((constellation) => {
        //   // display this comment on the screen
        //   this.props.addNewConstellation(constellation);
        // });
    };

    componentDidMount(){


    }

    
    render(){
        return(
            <>
            <div className="NewConstellationInput-body">
                <div className="NewConstellationInput-Title">
                    <div>Constellation Name</div>
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
                        className="u-pointer"
                        onClick={this.handleSubmit}
                    >
                        Save
                    </button>
                </div>
            </div>
            </>
        );
    }
}

export default NewConstellationInput;