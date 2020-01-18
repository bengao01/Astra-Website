import React, {Component} from "react"
import Constellation from "./Constellation.js"
import Star from "./Star.js"
import "./Sky.css"
import Konva from 'konva';
import { render } from 'react-dom';
import { Stage, Layer, Text, Group, Circle} from 'react-konva';

//has a props: learning-if learning mode is on
class Sky extends Component{
    constructor(props){
        super(props)
        this.state = {
            fixedConstellations : [[[120, 120], [180, 180]], [[180, 180], [350, 350]]],
            stars : [[120, 120], [180, 180], [350, 350]],
            newConstellations : [],
            points: [],
            starsize: 10,
            stageScale: 1,
            stageWidth: 0,
            stageX: 0,
            stageY: 0,
            imageX: 0,
            imageY: 0,
            firstclick: false,
            secondclick: false,
            edge: [],
        }
    }

    
    isOnStar = (x, y) => {
        for(let i=0; i < this.state.stars.length; i++){
            if (Math.abs(x-this.state.stars[i][0]) <= this.state.starsize && Math.abs(y - this.state.stars[i][1]) <= this.state.starsize){
                console.log("Onstar works")

                return true;
            }
        }
        return false;
    }

    static defaultProps = {};

    handleWheel = e => {
        e.evt.preventDefault();
        const scaleBy = 1.01;
        const stage = e.target.getStage();
        const oldScale = stage.scaleX();
        const mousePointTo = {
          x: stage.getPointerPosition().x / oldScale - stage.x() / oldScale,
          y: stage.getPointerPosition().y / oldScale - stage.y() / oldScale
        };
        const newScale = e.evt.deltaY > 0 ? oldScale * scaleBy : oldScale / scaleBy;
        stage.scale({ x: newScale, y: newScale });
        this.setState({
          stageScale: newScale,
          stageX:
            -(mousePointTo.x - stage.getPointerPosition().x / newScale) * newScale,
          stageY:
            -(mousePointTo.y - stage.getPointerPosition().y / newScale) * newScale
        });
      };      

      handleClick = e => {
        const stage = e.target.getStage();
        const pos = stage.getPointerPosition();
    
        const absTransform = this.group.getAbsoluteTransform();
    
        const invertedTransform = new Konva.Transform(
          absTransform.getMatrix()
        ).invert();
    
        const pointPos = invertedTransform.point(pos);

        if (this.isOnStar(pos.x,pos.y)){
            this.setState({
                firstclick: true,
                edge: [[pos.x, pos.y]],
            })
        }
    
        if(this.state.firstclick){
            let temp = this.state.edge.concat([pos.x, pos.y]);
          this.setState({
            secondclick: true,
            constellations: constellations.concat(temp),
            edge: [],
          })
        }

        if(this.state.secondclick){
            this.setState({
                firstclick: false,
                secondclick: false,
            })
        }
    
        this.setState({
          points: this.state.points.concat([pointPos]),
        });


      };


      handleImageDragEnd = e => {
        this.setState({
          imageX: e.target.x(),
          imageY: e.target.y()
        });
      };


    
    componentDidMount(){
    

    }


    addEdge = (x1, y1, x2, y2) => {

    }

    render(){
        return(
            <div ref={stageContainer => (this.stageContainer = stageContainer)}>
                <Stage 
                width={window.innerWidth} height={window.innerHeight}
                onWheel={this.handleWheel}
                onClick={this.handleClick}
                scaleX={this.state.stageScale}
                scaleY={this.state.stageScale}
                x={this.state.stageX}
                y={this.state.stageY}
                >
                    <Layer
                        draggable
                        x={this.state.imageX}
                        y={this.state.imageY}
                        ref={node => {
                        this.imageNode = node;
                        }}
                        onDragEnd={this.handleImageDragEnd}
                    >
                    <Text text="CONNECT THE DOTS" fill="white"/>
                    {this.state.stars.map((star) => 
                        <Circle x={star[0]} y={star[1]} radius={this.state.starsize}  fill = "white"/>
                    )}

                    {this.props.learning && this.state.fixedConstellations.map((constellation) => 
                        <Constellation edges={constellation}/>
                    )}

                    </Layer>
                    <Layer>
                        <Group
                            x={0}
                            y={0}
                            rotation={45}
                            ref={node => {
                            this.group = node;
                            }}
                        >
                        </Group>
                    </Layer>

                </Stage>
            </div>
            
        );
    
    }
}

export default Sky;