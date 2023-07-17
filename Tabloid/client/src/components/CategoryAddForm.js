import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addCategory } from "../modules/categoryManager";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const CategoryAddForm = ({ getCategories }) => {
    const emptyCategory = {
        Name: '',
    };

    const [category, setCategory] = useState(emptyCategory);
    const navigate = useNavigate();

    const handleInputChange = (evt) => {
        const value = evt.target.value;

        const categoryCopy =
        {
            Name: value
        }
        setCategory(categoryCopy);
    };

    const handleSave = (evt) => {
        evt.preventDefault();
        addCategory(category)
            .then((p) => navigate("/Category"))
    }
    return (
        <Form>
            <FormGroup>
                <Label for="category">New Category Name</Label>
                <Input
                    id="name"
                    type="text"
                    value={category.Name}
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

export default CategoryAddForm;