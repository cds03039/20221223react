import React,{Component} from "react";

class OnMouseMove extends Component{
    MouseMove(tag){
        console.log('TAG : '+tag);
    }

    render() {
        return (
            <>
            <div onMouseMove={e=> this.MouseMove("div")}>
                <h3>DIV onMouseMove</h3>             
            </div>
            <input type="text" onMouseMove={e=> this.MouseMove("input")}></input>
            <select onMouseMove={e=> this.MouseMove("select")}>
                <option value="react">MouseMove</option>
                <option value="200">200</option>
            </select>
            </>
        );
    }
}

export default OnMouseMove;