import React from "react";
import Comment from "./Comment";

const styles = {
    wrapper:{
        margin : 8,
        padding : 8,
        display : "flex",
        flexDirection: "row",
        border: "1px solid gray",
        borderRadius: 16,
    },
    imageContainer:{},
    image:{
        width:50,
        height:50,
        borderRadius:25,
    },
    contentContainer:{
        marginLeft:8,
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
    },
    nameText:{
        color:"black",
        fontSize:16,
        fontWeight:"bold",
    },
    commentText:{
        color:"black",
        fontSize:16,
    },
};

function CommentList(props){
    return(
        <div>
            <Comment imageContainer={<img
                src={require('./gg.jpg')}
                style={styles.image}
                alt=""
                />} name={"장승연"} comment={"만나서 반갑다."}/>
            <Comment imageContainer={<img
                src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                style={styles.image}
                alt=""
                />}name={"손수빈"} comment={"나는 정말 멍청하다."}/>
            <Comment imageContainer={<img
                src={require('./1.gif')}
                style={styles.image}
                alt=""
                />}name={"원창섭"} comment={"내가 만든 쿠키~~"}/>
        </div>
    )
}

export default CommentList;