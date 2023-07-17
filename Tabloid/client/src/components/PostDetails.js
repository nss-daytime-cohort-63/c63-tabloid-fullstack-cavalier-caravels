import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../modules/postManager";


const PostDetails = () => {
    const [post, setPost] = useState();
    const { id } = useParams();

    useEffect(() => {
        getPost(id).then(setPost);
    }, []);

    if (!post) {
        return null
    }

    return (
        <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-lg-6">
            <img src={post.imageLocation}/>
            <h3><strong>{post.title}</strong></h3>
            <h5>by: {post.userProfile.displayName}</h5>
            <h6>{post.publishDateTime}</h6>

            <p>
            {post.content}
            </p>
            
            {}
          </div>
        </div>
      </div>
        )
}

export default PostDetails;