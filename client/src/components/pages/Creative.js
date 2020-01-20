import React, {Component} from "react"
import CreativeSky from "../modules/CreativeSky.js"
import CreativeSideBar from "../modules/CreativeSideBar.js"

import "../../utilities.css";
import "./Creative.css";

class Creative extends Component{
    constructor(props){
        super(props)
        this.state = {
            newConstellation : [],
        }
        
    }

    
    componentDidMount(){
        
    }

    updateNewConstellation = (edge) => {
        this.setState({
            newConstellation : this.state.newConstellation.concat([edge]),
        });
    }


    render(){
        return(
            <>
                <div className="u-flexRow Creative-body">
                    <div className="Creative-creativeSideBar">
                        <CreativeSideBar newConstellation={this.state.newConstellation}/>
                    </div>
                    <div className="Creative-sky">
                        <CreativeSky newConstellation={this.state.newConstellation} updateNewConstellation={this.updateNewConstellation}/>
                    </div>
                </div>
            </>
        );
    }
}

export default Creative;