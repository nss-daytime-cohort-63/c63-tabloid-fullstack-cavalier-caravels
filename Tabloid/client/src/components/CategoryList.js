import React, { useEffect, useState } from "react";
import Category from "./Category";
import { getAllCategories } from "../modules/categoryManager";
import { Navigate, useNavigate } from "react-router-dom";

export default function CategoryList() {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllCategories().then(setCategories);
    }, []);

    const handleChange = (evt) => {
        evt.preventDefault();
        navigate("/Category/add");
    }

    return (
        <section>
            {categories.map((c) => (
                <Category key={c.id} category={c} />
            ))}
            <form>
                <button onClick={handleChange}>Add New Category</button>
            </form>
        </section>
    );
}