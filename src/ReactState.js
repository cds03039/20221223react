import React,{Component} from "react";

class ReactState extends Component{
    constructor(props){
        super(props);
        this.state={
            StateString : this.props.reactString,
            StateNumver:200,
        };
    }

    render() {
        return (
            <div style={{padding:"0px"}}>
                {this.state.StateString}
                {this.state.StateNumver}
                
            </div>
        );
    }
}

export default ReactState;