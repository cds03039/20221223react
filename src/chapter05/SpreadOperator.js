import React,{Component} from "react";

class SpreadOperator extends Component{
    constructor(props){
        super(props);
        this.state={};
    }

    componentDidMount(){

        var varArray1 = ["num1", "num2"];
        var varArray2 = ["num3", "num4"];
        var numVarArr = [varArray1[0], varArray1[1], varArray2[0], varArray2[1]];

        console.log("1. numVarArr : "+ numVarArr);

        let sumLetArr = [...varArray1, ...varArray2];
        console.log("2. numLetArr : "+sumLetArr);
        const [sum1,sum2,...remain] = sumLetArr;
        console.log("3. sum1 : "+sum1+", sum2 : "+sum2+", remain : "+remain);

        var varObj1 = {key1 : "var1", key2 : "var2"};
        var varObj2 = {key2 : "new2", key3 : "var2"};

        var sumvarObj = Object.assign({}, varObj1,varObj2);
        console.log("4. sumVarObj : "+JSON.stringify(sumvarObj));

        var sumLetObj = {...varObj1, ...varObj2};
        console.log("5. sumLetObj : "+JSON.stringify(sumLetObj));
        var{key1, key3, ...others} = sumLetObj;
        console.log("6. key1 : "+key1+", key3 : "+key3+", others : "+JSON.stringify(others));
    }
    

    
}




export default SpreadOperator;