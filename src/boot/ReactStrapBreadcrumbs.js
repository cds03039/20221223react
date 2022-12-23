import React,{Component} from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

class ReactstrapBreadcrumbs extends Component{
    render() {
        return (
            <div id="top">
                <Breadcrumb tag="nav" listTag="div">
                    <BreadcrumbItem tag="a" href="#top">
                        위로
                    </BreadcrumbItem>
                    <BreadcrumbItem tag="a" href="#bottom">
                        아래로
                    </BreadcrumbItem>
                </Breadcrumb>
                <div id="bottom" style={{marginTop: "1000px"}}>
                    <span>bottom</span>
                </div>
                
            </div>
        );
    }
}

export default ReactstrapBreadcrumbs;