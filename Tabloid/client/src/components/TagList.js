import React, {useEffect, useState} from "react";
import Tag from "./Tag";
import { getAllTags } from "../modules/tagManager";
import { Link, useNavigate } from "react-router-dom";

export default function TagList() {
    const [tags, setTags] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllTags().then(setTags);
    }, []);

    const handleChange = (evt) => {
        evt.preventDefault();
        navigate("/Tag/add")
    }

    return (
        <section>
            {tags.map((t) => (
                <Tag key={t.id} tag={t} /> 
            ))}
            <form>
                <button onClick={handleChange}>Create Tag</button>
            </form>
        </section>
    )
}