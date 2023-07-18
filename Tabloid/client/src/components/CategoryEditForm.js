import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editCategory } from "../modules/categoryManager";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const CategoryEditForm = () => {

    const navigate = useNavigate();
    const { id, Name } = useParams();
    const [category, setCategory] = useState({
        Id: id,
        Name: Name,
    });

    const handleInputChange = (evt) => {
        const value = evt.target.value;

        const category =
        {
            Id: id,
            Name: value
        }
        setCategory(category);
    };

    const handleSave = (evt) => {
        editCategory(category)
            .then((p) => navigate("/Category"))
    }

    return (
        <Form>
            <FormGroup>
                <Label for="category">Edit Category Name</Label>
                <Input
                    id="name"
                    type="text"
                    value={category.name}
                    onChange={handleInputChange}
                />
            </FormGroup>
            <FormGroup>
                <Button onClick={handleSave}>Save</Button>
            </FormGroup>
        </Form>
    )
};

export default CategoryEditForm;