import React, { Component } from "react";
import "./tutorial.css";
import slide1 from "./slideimages/slide1.jpg";
import slide2 from "./slideimages/slide2.jpg";
import slide3 from "./slideimages/slide3.jpg";
import slide4 from "./slideimages/slide4.jpg";
import slide5 from "./slideimages/slide5.jpg";
import slide6 from "./slideimages/slide6.jpg";


const Arrow = ({ direction, clickFunction, glyph }) => (
    <div 
      className={ `slide-arrow ${direction}` }
      onClick={ clickFunction }>
      { glyph }
    </div>
  );

const imgs = [slide1, slide2, slide3, slide4, slide5, slide6]


class Carousel extends Component {
    constructor (props) {
        super(props);
    
        this.state = {
          currentImageIndex: 0
        };
        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }

    previousSlide () {
        const lastIndex = imgs.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
    
        this.setState({
          currentImageIndex: index
        });
        console.log(index)
    }
    
      nextSlide () {
        const lastIndex = imgs.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index =  shouldResetIndex ? 0 : currentImageIndex + 1;
    
        this.setState({
          currentImageIndex: index
        });
        console.log(index)
    }

    render () {
      return (
        <div className="carousel">
            <Arrow
                direction="left"
                clickFunction={ this.previousSlide }
                glyph="&#9664;" />

            <img className="slide" src={ imgs[this.state.currentImageIndex] } backgroundsize= 'cover' backgroundPosition= 'center'/>

            <Arrow
                direction="right"
                clickFunction={ this.nextSlide }
                glyph="&#9654;" />
        </div>
      );
    }
  }

export default Carousel;
