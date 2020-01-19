import React, {Component} from "react"
import Constellation from "./Constellation.js"
import Star from "./Star.js"
import "./Sky.css"
import Edge from "./Edge.js"
import Konva from 'konva';
import { render } from 'react-dom';
import { Stage, Layer, Text, Group, Circle} from 'react-konva';

//has a props: learning-if learning mode is on
class Sky extends Component{
    constructor(props){
        super(props)
        this.state = {
            fixedConstellations : [[[120, 120, 220, 140], [220, 140, 350, 350], [280, 240, 350, 350]]],
            stars : [[120, 120], [220, 140], [280, 240], [350, 350]],
            //the set of new constellations made by the user
            newConstellations : [],
            //the current new constellation that is being made by the user, will later be added to newConstellations
            newConstellation : [],
            points: [],
            starsize: 10,
            stageScale: 1,
            stageWidth: 0,
            stageX: 0,
            stageY: 0,
            imageX: 0,
            imageY: 0,
            firstclick: false,
            edge: [],
        }
    }

    
    isOnStar = (x, y) => {
        for(let i=0; i < this.state.stars.length; i++){
            if (Math.abs(x-this.state.stars[i][0]) <= this.state.starsize && Math.abs(y - this.state.stars[i][1]) <= this.state.starsize){
                console.log("is onStar")

                return [this.state.stars[i][0], this.state.stars[i][1]];
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

        let starCoord = this.isOnStar(pos.x, pos.y);
        if (starCoord && this.state.firstclick == false){
            this.setState({
                firstclick: true,
                edge: [starCoord[0], starCoord[1]],
            })
        }    
        else if(starCoord && this.state.firstclick){
            let newEdge = this.state.edge.concat([starCoord[0], starCoord[1]]);
            if(this.state.newConstellation.length == 0){
                this.setState({
                    newConstellation : [newEdge],
                    edge: [],
                    firstclick : false,
                })
            }
            else{
                console.log(this.state.newConstellation)
                this.setState({
                    newConstellation : this.state.newConstellation.concat([newEdge]),
                    edge: [],
                    firstclick : false,
                })
            }
          
          console.log(this.state.newConstellation);
        }
        else if(this.state.firstclick && !this.isOnStar(pos.x,pos.y)){
            this.setState({
                firstclick: false,
                edge : [],
            })
        }
        else{
            this.setState({
                firstclick: false,
                edge : [],
            })
        }

        console.log(this.state.firstclick)
    
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
            <div className="Sky-body">
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
                            x={this.state.stageX}
                            y={this.state.stageY}
                            ref={node => {
                            this.stageNode = node;
                            }}
                            onDragEnd={this.handleImageDragEnd}
                        >

                        {this.state.stars.map((star) => 
                            <Circle x={star[0]} y={star[1]} radius={this.state.starsize}  fill = "white"/>
                        )}

                        {this.props.learning && this.state.fixedConstellations.map((constellation) => 
                            <Constellation edges={constellation}/>
                        )}

                        {!this.props.learning && this.state.newConstellation && this.state.newConstellation.map((edges) =>         
                            //console.log(edges)
                            <Edge position={edges}/>
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
            </div>
        );
    
    }
}

export default Sky;