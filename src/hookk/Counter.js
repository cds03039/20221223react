import React,{useState , useEffect} from "react";

const Counter=()=>{
    const [value, setValue]= useState(0);


    useEffect(()=>{
        document.title = `현재 카운터 값 : ${value}`
    })
    return(
        <div>
            <p>현재 카운터 값(useState) : {value}</p>
            <button onClick={()=> setValue(value+1)}>+1</button>
            <button onClick={()=> setValue(value-1)}>-1</button>
        </div>
    )
}

export default Counter;