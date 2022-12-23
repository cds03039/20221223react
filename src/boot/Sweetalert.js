import React,{Component} from "react";
import Swal from "sweetalert2";

class Sweetalert extends Component{
    componentDidMount(){
        Swal.fire("1. SweetAlert").then((result)=>{
            alert("2. result.value : "+ result.value);
        });
    }

    render(){
        return <h1>얼럿 꾸미기</h1>
    }
}

export default Sweetalert;