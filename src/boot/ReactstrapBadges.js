import React,{Component} from "react";
import { Badge,Button } from "reactstrap";

class ReactstrapBadges extends Component{
    render() {
        return (
            <div>
                <h1>Product name <Badge color="secondary">hit</Badge>
                </h1>
                <Button color="light" outline>
                    Today <Badge color="dark">3552</Badge>
                </Button>
                <Button color="light" pill>
                    pill
                </Button>
                <Button color="light" href="http:www.naver.com">
                    naver
                </Button>
            </div>
        );
    }
}

export default ReactstrapBadges;