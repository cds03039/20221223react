import React,{Component} from "react";
import{
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
}from "reactstrap";

class ReactstrapCard extends Component{
    render() {
        return (
            
            <div>
                <Card>
                    <CardImg
                    top
                    height="200px"
                    src={require('./gg.jpg')}
                    alt="Card image cap"
                    />
                    <CardBody>
                        <CardTitle>왜또찡찡거려</CardTitle>
                        <CardSubtitle>ㅋㅋㅋㅋㅋㅋㅋㅋ</CardSubtitle>
                        <CardText>당신을 이불속으로 초대합니다.</CardText>
                        <Button>수락</Button>
                    </CardBody>
                </Card>
                
            </div>
        );
    }
}

export default ReactstrapCard;