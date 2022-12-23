import React,{Component} from "react";

class Es6 extends Component{
    constructor(props){
        super(props);
        this.state={};
    }


componentDidMount(){
    var jsString1 = "자바 스크립트";
    var jsString2 = "입니다. \n 다음줄입니다.";
    console.log(jsString1+ "문자열" +jsString2+"~");
    
    var Es6String1 = "Es6";
    var Es6String2 = "입니다";
    console.log(`${Es6String1} 문자열 ${Es6String2}!!
    ___다음줄 입니다.`);

    var LongString = "ES6에추가된String함수들입니다.";
    console.log("startsWith : "+LongString.startsWith("ES6에추가된"));
    console.log("endsWith : "+LongString.endsWith("입니다."));
    console.log("includes : "+LongString.includes("String함수들"));
}
    render(){
        return <h2>[ this is Es6 String ]</h2>
    }


}

export default Es6;