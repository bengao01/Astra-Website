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
        if(this.props.constellationNames.includes(this.state.value)){
            alert("Please enter a unique name for your constellation!");
        }
        else if(this.state.value !== "" ){
            this.addConstellation(this.state.value);
            this.setState({
                value: "",
            });
            console.log("handle constellation submit");
        }
        else{
            alert("Please enter a name for your constellation!");
        }      
    };

    handleDelete = (event) => {
        event.preventDefault();
        this.props.deleteUnsavedConstellation();
    }

    addConstellation = (value) => {
        // const body = { sky_id: this.props.sky_id, name: constellationName };
        console.log("add constellation");
        // const body = {name: value};
        console.log(this.props.skyId)
        const body = {name: value, newConstellation: this.props.newConstellation, sky_id: this.props.skyId};

        post("/api/constellation", body).then(() => {
            this.props.resetNewConstellation()
        });

        this.props.updateConstellationNames(value);
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
                        className="input"
                    />
                    <button
                        type="submit"
                        value="Submit"
                        className="u-pointer btn btn-success btn:hover"
                        onClick={this.handleSubmit}
                    >
                        Save
                    </button>
                    <button
                        type="submit"
                        value="Submit"
                        className="u-pointer btn btn-danger btn:hover"
                        onClick={this.handleDelete}
                    >
                        Delete Unsaved Constellation
                    </button>
                </div>
            </div>
            </>
        );
    }
}

export default NewConstellationInput;