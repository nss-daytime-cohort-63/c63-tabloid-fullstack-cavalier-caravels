import React from "react";
import { useEffect, useState } from "react";
import { getAllCommentsByPostId } from "../modules/commentManager";

export default commentList =( postId)=>{

    const [comments, setComments]=useState([])


    useEffect(()=>{
        if(postId !=null)
        {
            getAllCommentsByPostId(postId).then(setComments)
        }

    },[postId])

    return<>
        <div>
            <ul>
            {comments.map((comment)=>{
                <li>{comment.subject}</li>
            })}    
                
            </ul>
        </div>   
    </>

}