import React, {Component} from "react"
import Sky from "../modules/Sky.js"
import CreativeSideBar from "../modules/CreativeSideBar.js"

import "../../utilities.css";
import "./Creative.css";

class Creative extends Component{
    constructor(props){
        super(props)
        
    }

    
    componentDidMount(){
        
    }


    render(){
        return(
            <>
                <div className="u-flexRow Creative-body">
                    <div className="Creative-creativeSideBar">
                        <CreativeSideBar/>
                    </div>
                    <div className="Creative-sky">
                        <Sky/>
                    </div>
                </div>
            </>
        );
    }
}

export default Creative;