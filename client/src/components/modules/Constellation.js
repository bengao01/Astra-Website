import React, { Component } from "react"
import Star from "./Star.js"
//props: receives a drawStar function to draw stars
class Constellation extends Component{
    constructor(props){
        super(props)
        this.state = {
            name : "",
            stars : [[120,120], [180, 180]],
        };
    }

    componentDidMount(){

    }

    render(){
        return(
            <>
                
            </>
        );
    
    }
}


export default Constellation;