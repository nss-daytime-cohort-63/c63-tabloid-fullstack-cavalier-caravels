import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../modules/postManager";
import CommentList from "./Comments";


const PostDetails = () => {
    const [post, setPost] = useState();
    const { id } = useParams();

    useEffect(() => {
        getPost(id).then(setPost);
    }, []);

    if (!post) {
        return null
    }


  const publishDate = new Date(post.publishDateTime);

  const formattedDate = `${publishDate.toLocaleString("en-US", {
    month: "long",
  })} ${publishDate.getDate()}, ${publishDate.getFullYear()}`;

    return (
        <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-lg-6">
          {
          post.imageLocation ? (<img src={post.imageLocation} alt="Post Image" />) : ""
          }
            <h3><strong>{post.title}</strong></h3>
            <h5>by: {post.userProfile.displayName}</h5>
            <h6>{formattedDate}</h6>
            <p>
            {post.content}
            </p>
            <strong><h6>Comments:</h6></strong>
            <CommentList postId={id}/>
          </div>
        </div>
      </div>
        )
}

export default PostDetails;