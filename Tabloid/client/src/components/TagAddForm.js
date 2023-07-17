import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { addTag } from "../modules/tagManager";

const TagAddForm = () => {
    const emptyTag = {
        Name: '',
    };

    const [tag, setTag] = useState(emptyTag);
    const navigate = useNavigate();

    const handleInputChange = (evt) => {
        const value = evt.target.value;

        const tagCopy = {
            Name: value
        }
        setTag(tagCopy);
    };

    const handleSave = (evt) => {
        evt.preventDefault();
        addTag(tag)
            .then((p) => navigate("/Tag"))
    };
    return (
        <Form>
            <FormGroup>
                <Label for="tag">New Tag Name</Label>
                <Input
                    id="name"
                    type="text"
                    value={tag.Name}
                    placeholder="Enter Name Here"
                    onChange={handleInputChange}
                />
            </FormGroup>
            <FormGroup>
                <Button onClick={handleSave}>Save</Button>
            </FormGroup>
        </Form>
    );
};

export default TagAddForm;