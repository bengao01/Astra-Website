import React, { Component } from "react"
import Konva from 'konva';
import { render } from 'react-dom';
import { Stage, Layer, Text, Circle, Line} from 'react-konva';

//props: postition array with the 4 coordinates of the two stars
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
                points={[this.props.position[0], this.props.position[1], this.props.position[2], this.props.position[3]]}
                stroke='white'
                strokeWidth='1'
            />
        );
    
    }
}


export default Edge;