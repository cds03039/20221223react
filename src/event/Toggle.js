/*import React,{Component} from "react";

class Toggle extends Component{
    constructor(props){
        super();
        this.state={isToogleOn : true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState((prevState)=>({
            isToogleOn: !prevState.isToogleOn,
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToogleOn ? "On" : "Off"}
                
            </button>
        );
    }
}

export default Toggle;*/
import React from "react";
import { useState } from "react";

function Toggle(props){

    const [isToogleOn, setIsToogleOn] = useState(true);

    function handleClick(){
        setIsToogleOn((isToogleOn)=> !isToogleOn)
    }

    return(
    <button onClick={handleClick}>
                {isToogleOn ? "On" : "Off"}
    </button>
    )
}

export default Toggle;

