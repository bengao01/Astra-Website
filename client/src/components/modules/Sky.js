import React, {Component} from "react"
import Constellation from "./Constellation.js"
import Star from "./Star.js"
import "./Sky.css"
import Konva from 'konva';
import { render } from 'react-dom';
import { Stage, Layer, Text } from 'react-konva';

class Sky extends Component{
    constructor(props){
        super(props)
        this.state = {
            constellations : [],
            stars : [[120, 120], [180, 180]],
        }
    }

    
    componentDidMount(){
    

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

                    {/* {this.state.constellations.map()} */}
                    </Layer>

                </Stage>
            </>
            
        );
    
    }
}

export default Sky;