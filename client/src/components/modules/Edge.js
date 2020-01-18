import React, { Component } from "react"
import Konva from 'konva';
import { render } from 'react-dom';
import { Stage, Layer, Text, Circle, Line} from 'react-konva';

//props: first, second : first and second coordinates for the connected stars
class Edge extends Component{
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
            <Line
                points={[this.props.first[0], this.props.first[1], this.props.second[0], this.props.second[1]]}
                stroke='white'
            />
        );
    
    }
}


export default Edge;