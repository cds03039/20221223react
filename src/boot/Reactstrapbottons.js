import React,{Component} from "react";
import { Button } from "reactstrap";

class ReactstrapBottons extends Component{
    render() {
        return (
            <div style={{padding : "0px"}}>
                <Button color="primary">blue</Button>
                <Button color="info">info</Button>
                <Button color="success">success</Button>
                <Button color="warning">warning</Button>
                <Button color="danger">danger</Button>
                <Button color="dark">dark</Button>
                <Button color="secondary">secondary</Button>
                <Button color="light">light</Button>

                
            </div>
        );
    }
}

export default ReactstrapBottons;