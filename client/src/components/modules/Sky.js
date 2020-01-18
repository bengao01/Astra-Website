import React, {Component} from "react"
import Constellation from "./Constellation.js"
import Star from "./Star.js"
import "./Sky.css"
import Konva from 'konva';
import { render } from 'react-dom';
import { Stage, Layer, Text } from 'react-konva';

//has a props: learning-if learning mode is on
class Sky extends Component{
    constructor(props){
        super(props)
        this.state = {
            fixedConstellations : [[[120, 120], [180, 180]], [[180, 180], [350, 350]]],
            stars : [[120, 120], [180, 180], [350, 350]],
            newConstellations : []
        }
    }

    
    componentDidMount(){
    

    }


    addEdge(){

    }

    render(){
        return(
            <>
                <Stage width={window.innerWidth} height={window.innerHeight}>
                    <Layer>
                    <Text text="Try to drag a star" />
                    {this.state.stars.map((star) => 
                        <Star position={star}/>
                    )}

                    {this.props.learning && this.state.fixedConstellations.map((constellation) => 
                        <Constellation edges={constellation}/>
                    )}

                    </Layer>

                </Stage>
            </>
            
        );
    
    }
}

export default Sky;