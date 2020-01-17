import React, {Component} from "react"

class Star extends Component{
    //prop for star's position
    //prop function to draw a circle at its position
    constructor(props){
        super(props)
        this.state = {
            isActive : false,
        }
    }

    
    componentDidMount(){
        console.log(this.props.position[0], this.props.position[1])
        this.drawStar(this.props.position[0], this.props.position[1])


    }

    drawStar = (x,y) => {
        const canvas = this.props.getCanvas();
        console.log(canvas);
        const ctx = canvas.getContext('2d');

        ctx.beginPath();
        console.log("begun path")
        ctx.arc(x-5, y, 20, 0, Math.PI * 2, true);
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.stroke();
    }

    
    render(){
        return(
            <>
                <span>Here</span>

            </>
        );
    }
}

export default Star;