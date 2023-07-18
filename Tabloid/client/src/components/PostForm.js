import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { getAllCategories } from "../modules/categoryManager";
import { addPost } from "../modules/postManager";


const PostForm = ({ userProfile }) => {
    const currentDate = new Date(Date.now()).toISOString();

    const emptyPost = {
        Title: "",
        Content: "",
        ImageLocation: "",
        CreateDateTime: currentDate,
        PublishDateTime: currentDate,
        isAprroved: false,
        CategoryId: 0,
        UserProfileId: userProfile.id
    };

    const [categories, setCategories] = useState([])
    const navigate = useNavigate();
    const [newPost, setNewPost] = useState(emptyPost)


    useEffect(() => {
        getAllCategories().then(setCategories);
    }, []);

    const handleInputChange = (event) => {
        const value = event.target.value;
        const key = event.target.id;

        const newPostCopy = { ...newPost }


        if (key === "CategoryId") {
            newPostCopy[key] = parseInt(value); 
        } else {
            newPostCopy[key] = value;
        }
        
        setNewPost(newPostCopy)
    }

    const handleSave = (event) => {
        event.preventDefault();
        addPost(newPost)
            .then(() => navigate("/Post"))
    }

    return (<>
        <h5>Create a new post:</h5>
        <Form>
            <FormGroup>
                <Label>Title:</Label>
                <Input
                    type="text"
                    id="Title"
                    value={newPost.Title}
                    placeholder="Enter post title here"
                    onChange={handleInputChange} />
            </FormGroup>
            <FormGroup>
                <Label>Content:</Label>
                <Input
                    type="textarea"
                    id="Content"
                    value={newPost.Content}
                    placeholder="Enter post content here"
                    onChange={handleInputChange} />
            </FormGroup>
            <FormGroup>
                <Label>Image URL:</Label>
                <Input
                    type="text"
                    id="ImageLocation"
                    value={newPost.ImageLocation}
                    placeholder="Enter post image url here..."
                    onChange={handleInputChange} />
            </FormGroup>
            <FormGroup>
                <Label>Category:</Label>
                <Input type="select" id="CategoryId" onChange={handleInputChange}>
                    <option key={0} >Select a category...</option>
                    {
                        categories.map((c) => {
                            return (
                                <option value={c.id} key={c.id}>{c.name}</option>
                            )
                        })
                    }
                </Input>
            </FormGroup>
            <FormGroup>
                <Button onClick={handleSave}>Save</Button>
            </FormGroup>
        </Form>
    </>
    )
}

export default PostForm;