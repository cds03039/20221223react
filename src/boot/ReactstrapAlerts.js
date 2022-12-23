import React,{Component} from "react";
import { Alert, UncontrolledAlert } from "reactstrap";

class ReactStarpAlerts extends Component{
    render() {
        return (
            <div>
                <Alert color="light">
                    simple Alert [color:light]
                </Alert>
                <UncontrolledAlert color="warning">
                UncontrolledAlert [color : warning]
                </UncontrolledAlert>
                <Alert color="dark">
                    simple Alert [color:dark]
                </Alert>
            </div>
        );
    }
}

export default ReactStarpAlerts;