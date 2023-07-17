import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addCategory } from "../modules/categoryManager";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const CategoryForm = ({ getCategories }) {
    const emptyCategory = {
        name: '',
    };

    const [category, setCategory] = useState();
    const navigate = useNavigate();

    const handleInputChange = (evt) => {
        const value = evt.target.value;
        const key = evt.target.value;

        const categoryCopy = { ...category };

        categoryCopy[key] = value;
        setCategory(categoryCopy);
    };

    const handleSave = (evt) => {

    }
}


const submitForm = (e) => {
    e.preventDefault();
    addCategory(categoryName)
        .then(() => navigate("/Category"))
        .catch((err) => alert(`An error occurred: ${err.message}`));
};

return (
    <Form onSubmit={submitForm}>
        <FormGroup>
            <Label for="categoryName">Name</Label>
            <Input
                id="categoryName"
                type="text"
                onChange={(e) => setCategoryName(e.target.value)}
            />
        </FormGroup>
        <FormGroup>
            <Button onClick={submitForm}>Save</Button>
        </FormGroup>
    </Form>
)
}