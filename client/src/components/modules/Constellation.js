import React, { Component } from "react"
import Konva from 'konva';
import Edge from "./Edge.js";
import { render } from 'react-dom';
import { Stage, Layer, Text, Circle } from 'react-konva';

//props: edges: an array of coordinates for the edges
class Constellation extends Component{
    constructor(props){
        super(props)
        this.state = {
            name : "",
        };
    }

    componentDidMount(){

    }

    render(){
        return(
            <>
                {this.props.edges.map((edges) =>
                    <Edge position={edges}/>
                )}
            </>
            
        );
    
    }
}


export default Constellation;