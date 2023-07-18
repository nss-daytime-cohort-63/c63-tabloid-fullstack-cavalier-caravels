import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { editTag } from "../modules/tagManager";

const TagEditForm = () => {
    const { id } = useParams();
    const [tag, updateTag] = useState({
        Id: id,
        Name: '',
    });

    const navigate = useNavigate();

    const handleInputChange = (evt) => {
        const value = evt.target.value;

        const tagCopy = {
            Id: id,
            Name: value
        };
        updateTag(tagCopy);
    }

    const handleSave = (evt) => {
        evt.preventDefault();
        editTag(tag)
            .then(() => navigate("/Tag"))
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
    )
}

export default TagEditForm;