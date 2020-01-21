import React, {Component} from "react"
import { render } from 'react-dom';

import "../../utilities.css";
import "./NewSkyInput.css";
import { post } from "../../utilities";


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
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.resetNewConstellations();
        // this.props.onSubmit && this.props.onSubmit(this.state.value);
        post("/api/updateSky", {_id : this.props.skyId, name : this.state.value});
        this.setState({
            value: "",
        });
        console.log("handle sky submit");
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

export default NewSkyInput;