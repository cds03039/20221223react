import React,{Component} from "react";

class C_LifecycleEx extends Component{
    constructor(props){
        super(props);
        this.state={};
        console.log("1. constructor Call");
    }

    render(){
        console.log("3. render Call");
        return <h2>[ this is constructor function ]</h2>
    }
}

export default C_LifecycleEx;