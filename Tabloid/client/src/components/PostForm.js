import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const PostForm = () => {
    const emptyPost = {
        Title: "",
        Content: "",
        ImageLocation: "",
        CreateDateTime: "",
        PublishDateTime: "",
        IsApproved: 1,
        CategoryId: 0,
        UserProfileId: 0
    };

    const [newPost, setNewPost] = useState(emptyPost)
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const value = event.target.value;

        const postCopy = 
        {
            
        }
    }

    return (
        <Form>
            <FormGroup>
                <Label>Title:</Label>
                <Input 
                    type="text" 
                    id="Title" 
                    value={newPost.Title} 
                    placeholder="Enter post title here"
                    onChange={handleInputChange}/>
            </FormGroup>
            <FormGroup>
                <Label>Content:</Label>
                <Input
                    type="textarea" 
                    id="Content" 
                    value={newPost.Content} 
                    placeholder="Enter post content here"
                    onChange={handleInputChange}/>
            </FormGroup>
            <FormGroup>
                <Label>Image URL:</Label>
                <Input
                    type="text" 
                    id="Image Url" 
                    value={newPost.ImageLocation} 
                    placeholder="Enter post image url here..."
                    onChange={handleInputChange}/>
            </FormGroup>
            <FormGroup>
                <Label>Category:</Label>
                <Input/>
            </FormGroup>
        </Form>
    )
}

export default PostForm;