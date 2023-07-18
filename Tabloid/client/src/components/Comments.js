import React from "react";
import { useEffect, useState } from "react";
import { getAllCommentsByPostId } from "../modules/commentManager";
import { Card, CardBody } from "reactstrap";

const CommentList =( {postId} )=>{

    const [comments, setComments]=useState([])


    useEffect(()=>{
        if(postId != null)
        {
            getAllCommentsByPostId(postId).then(setComments);
    }

    },[])

    const datefix =(comment)=>{
            var date =  new Date(comment.createdDateTime)
            //const [dayMo, ] = date.split("T")
            const formattedDate = date.toLocaleString("en-US", 
            {month: "long", day:"numeric", year:"numeric"})
                       
        return formattedDate
    }

    const mapfunc =()=>{
        return comments?.map((comment)=>(
            <Card key={comment.id}>
                <CardBody><h4><img src={comment?.user.imageLocation} 
                alt={comment?.user.displayName} 
                width={50}/> {comment?.user.displayName} said</h4>
                
            <h5>{comment.subject}</h5>
            {comment.content}
            <p>on {datefix(comment)}</p></CardBody>
            </Card>
        ))
    }
     
    return(<div>
            <button>Add Comment</button>
           { comments?.[0] ? mapfunc() : <h3>No Comments</h3>
        } 
         </div>  
    )

}
export default CommentList;

