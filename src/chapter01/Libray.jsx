import React from "react";
import Book from "./Book";

function Library(props){
    return(
        <div>
            <Book name="다시 만난 세계" numOfPage={300}/>
            <Book name="소원을 말해봐" numOfPage={400}/>
            <Book name="Hipe boy" numOfPage={500}/>
        </div>
    )
}

export default Library;