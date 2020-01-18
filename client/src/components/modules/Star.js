import React, {Component} from "react"
import Konva from 'konva';
import { render } from 'react-dom';
import { Stage, Layer, Text, Circle } from 'react-konva';

class Star extends Component{
    //prop for star's position
    constructor(props){
        super(props)
        this.state = {
            isActive : false,
        }
    }

    
    componentDidMount(){


    }

    
    render(){
        return(
            
            <Circle x={this.props.position[0]} y={this.props.position[1]} radius={10} fill="white" />
            
        );
    }
}

export default Star;