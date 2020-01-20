import React, {Component} from "react"
import LearningSky from "../modules/LearningSky.js"


class Learning extends Component{
    constructor(props){
        super(props)
        
    }

    
    componentDidMount(){
        
    }


    render(){
        return(
            <>
                <LearningSky learning={true}/>
            </>
            
        );
    
    }
}

export default Learning;