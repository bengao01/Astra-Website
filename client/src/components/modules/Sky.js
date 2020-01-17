import React, {Component} from "react"
import Constellation from "./Constellation.js"
import Star from "./Star.js"

class Sky extends Component{
    constructor(props){
        super(props)
        this.state = {
            constellations : [[]],
            stars : [[120, 120], [180, 180]],
        }
    }

    
    componentDidMount(){
        this.drawBackground();
        //this.updateCanvas();
    }

    // componentDidUpdate() {
    //     this.updateCanvas();
    // }

    //draws a black circle for the background
    drawBackground(){
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        var centerX = canvas.height / 2;
        var centerY = canvas.height / 2;
        var radius = 70;


        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'black';
        ctx.fill();
        ctx.lineWidth = 5;
        ctx.strokeStyle = 'black';
        ctx.stroke();
        ctx.closePath();
    }

    // updateCanvas() {
    //     const canvas = this.refs.canvas;
    //     const ctx = canvas.getContext('2d');

    //     this.state.stars.map((star) => (
    //         this.drawCircle(star[0], star[1])
    //     ));
    // }

    

    getCanvas = () => {
        return document.getElementById('canvas');
    }
    

    render(){
        return(
            <>
                <canvas id = "canvas" width ="300" height = "300"/>
                {this.state.stars.map((star, index) => 
                    <Star position = {star} getCanvas={this.getCanvas} drawStar={this.drawStar} key={index}/>)}
                
            </>
            
        );
    
    }
}

export default Sky;