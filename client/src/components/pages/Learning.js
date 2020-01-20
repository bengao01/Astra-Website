import React, {Component} from "react"
import LearningSky from "../modules/LearningSky.js"
import LearningSideBar from "../modules/LearningSideBar.js"

class Learning extends Component{
    constructor(props){
        super(props)
        
    }

    
    componentDidMount(){
        
    }


    render(){
        return(  
            <div className="u-flexRow">
                <div className="Learning-learningSideBar">
                    <LearningSideBar />
                </div>
                <div>
                    <LearningSky learning={true}/>
                </div>
            </div>           
        );
    
    }
}

export default Learning;