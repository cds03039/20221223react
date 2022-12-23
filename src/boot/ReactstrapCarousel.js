import React,{Component} from "react";
import { UncontrolledCarousel } from "reactstrap";
import img from './gg.jpg';
const items =[
    {
        src:img,
        altText : "슬리이드1 문구",
        caption: "제목",
        header:"슬라이드1 제목",
    },
    {
        src:img,
        altText : "슬리이드1 문구",
        caption: "제목",
        header:"슬라이드1 제목",
    },
    {
        src:img,
        altText : "슬리이드1 문구",
        caption: "제목",
        header:"슬라이드1 제목",
    },
];

class ReactstrapCarousel extends Component{
    render(){
        return<UncontrolledCarousel items={items}/>
    }
}

export default ReactstrapCarousel;