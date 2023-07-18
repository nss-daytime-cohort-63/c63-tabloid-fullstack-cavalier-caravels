import React, { useEffect, useState } from "react";
import { getAllPosts } from "../modules/postManager";
import { Table, Button } from "reactstrap";
import Post from "./Post";
import { useNavigate } from "react-router-dom";

export default function PostList() {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllPosts().then(setPosts);
    }, []);

    const handleAddClick = (event) => {
        event.preventDefault();
        navigate("./Add")
    }
    return (
        <>
        <Button onClick={handleAddClick}>Add new Post</Button>
        <Table>
            <thead>
                <tr>
                    <th>
                       Post Title
                    </th>
                    <th>
                        Author
                    </th>
                    <th>
                        Category
                    </th>
                    <th>
                        actions
                    </th>
                </tr>
            </thead>
            <tbody>
                {posts.map((p) => (
                    <Post key={p.id} post={p} postId={p.Id} />
                ))}
            </tbody>
        </Table>
        </>
    )
}