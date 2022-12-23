import React,{Component, component} from "react";
import datatype from 'prop-types';

class PropsObjVal extends Component{
    render() {
        let{
            ObjectJson
        } = this.props
        
        return (
            <div style={{padding:"0px"}}>
                {JSON.stringify(ObjectJson)}
                
            </div>
        );
    }
}

PropsObjVal.propTypes = {
    ObjectJson: datatype.shape({
        react: datatype.string,
        twohundred:datatype.string
    })
}

export default PropsObjVal;