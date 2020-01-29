import React, {Component} from "react"
import Constellation from "./Constellation.js"
import Star from "./Star.js"
import Edge from "./Edge.js"
import Konva from 'konva';
import { render } from 'react-dom';
import { Stage, Layer, Text, Group, Circle, Line} from 'react-konva';
import { constelledges } from "./constellationedges.js";
import { starlocs } from "./starlocations.js";

//has a props: learning-if learning mode is on
class SavedSky extends Component{
    constructor(props){
        super(props)
        this.state = {
            stars : [],
            points: [],
            starsize: 3,
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

    processStarLoc = () => {
        this.setState({
            stars: starlocs
        })

    }

    static defaultProps = {};

    handleWheel = e => {
        e.evt.preventDefault();
        const scaleBy = .97;
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

    handleStageDragEnd = e => {
        this.setState({
            stageX : e.target.x(),
            stageY: e.target.y()
        });
    };
    
    componentDidMount(){
        this.processStarLoc();
        //this.processConstEdge();
    }

    render(){
        return(
            <div className="LearningSky-body">
                <div ref={stageContainer => (this.stageContainer = stageContainer)}>
                    <Stage 
                    draggable
                    x={this.state.stageX}
                    y={this.state.stageY}
                    ref={node => {
                        this.stageNode = node;
                    }}
                    onDragEnd={this.handleStageDragEnd}
                    width={window.innerWidth} height={window.innerHeight}
                    onWheel={this.handleWheel}
                    onClick={this.handleClick}
                    scaleX={this.state.stageScale}
                    scaleY={this.state.stageScale}
                    x={this.state.stageX}
                    y={this.state.stageY}
                    >
                        <Layer
                            // draggable
                            // x={this.state.imageX}
                            // y={this.state.imageY}
                            // ref={node => {
                            // this.imageNode = node;
                            // }}
                            // onDragEnd={this.handleImageDragEnd}
                        >

                        {this.state.stars.map((star) => 
                            <Circle x={star[0]} y={star[1]} radius={this.state.starsize}  fill = "white"/>
                        )}

                        {this.props.savedConstellations.map((constellation) => 
                            <Constellation edges={constellation.edges}/>
                        )}
                        
                        {this.props.clickedConstellStar.map((star) =>
                            <Circle x={star[0]} y={star[1]} radius={this.state.starsize+3}  fill = "white" opacity = {.4}/>
                        )}
                        {this.props.clickedConstell.map((edge) =>
                            <Line points={[edge[0], edge[1], edge[2], edge[3]]}
                            stroke='white'
                            opacity = {.25}
                            strokeWidth={4}/>
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

export default SavedSky;