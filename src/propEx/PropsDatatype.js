import React,{Component} from "react";
import datatype from "prop-types";

class D_PropsDatatype extends Component{
    render(){
        let {String, Number, Boolean, Array, ObjectJson, Function } = this.props;
        return(
            <div style={{padding:"0px"}}>
            <p>StringProps:{String}</p>
            <p>NumberProps:{Number}</p>
            <span>BooleanProps:{Boolean.toString()}</span>
            <p>ArrayProps:{Array.toString}</p>
            <p>ObjectJsonProps:{JSON.stringify(ObjectJson)}</p>
            <p>FunctionProps:{Function}</p>
            </div>
        );
            
        }
    
    
    
    }

    D_PropsDatatype.prototype={
        String:datatype.number,
        Number:datatype.number,
        Boolean: datatype.Boolean,
        Array : datatype.array,
        Object : datatype.object,
        Function : datatype.Function,

    }
    export default D_PropsDatatype;
  