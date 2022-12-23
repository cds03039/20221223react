import React,{Component} from "react";
import { Progress } from "reactstrap";

class ReactstrapPopover extends Component{
    constructor(props){
        super(props);
        this.state={progress:0}
    }

    componentDidMount(){this.progress()}

    progress=()=>{
        if(this.state.progress !== 99){
            setTimeout(function(){
                this.setState({progress: this.state.progress+1});
                this.progress();
            }.bind(this), 50);
        }
    }

    render() {
        return (
            <>
                <Progress color="info" value={this.state.progress}>{this.state.progress}%</Progress>
                <Progress multi>
                    <Progress bar color="warning" value="25">25%</Progress>
                    <Progress bar color="success" value="35">react</Progress>
                    <Progress bar value="20">200</Progress>
                    <Progress bar value="20">200</Progress>

                </Progress>
            </>
        );
    }
}

export default ReactstrapPopover;