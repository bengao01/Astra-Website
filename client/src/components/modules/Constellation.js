import React, { Component } from "react"


class Constellation extends Component{
    constructor(props){
        super(props)
        this.state = {
            stars : [[120,120], [180, 180]],
        };
    }

    componentDidMount(){
        this.drawBackground();
        this.updateCanvas();
    }

    componentDidUpdate() {
        this.updateCanvas();
    }

    //draws a black circle for the background
    drawBackground(){
        const canvas = this.refs.canvas;
        const ctx = this.refs.canvas.getContext('2d');
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

    updateCanvas() {
        const canvas = this.refs.canvas;
        const ctx = this.refs.canvas.getContext('2d');

        this.state.stars.map((star) => (
            this.drawCircle(star[0], star[1])
        ));
    }

    //function to draw a circle
    drawCircle(x, y){
        const canvas = this.refs.canvas;
        const ctx = this.refs.canvas.getContext('2d');

        ctx.beginPath();
        ctx.arc(x-5, y, 5, 0, Math.PI * 2, true);
        ctx.fillStyle = 'white';
        ctx.fill();
        //ctx.stroke();
    }

    render(){
        return(
            <canvas ref = "canvas" width ="300" height = "300"></canvas>
        );
    
    }
}


export default Constellation;