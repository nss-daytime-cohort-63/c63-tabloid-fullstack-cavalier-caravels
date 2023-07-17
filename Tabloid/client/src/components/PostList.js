import React, {useEffect, useState} from "react";
import { getAllPosts } from "../modules/postManager";
import { Table } from "reactstrap";
import Post from "./Post";

export default function PostList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getAllPosts().then(setPosts);
    }, []);

    return (
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
                </tr>
            </thead>
            <tbody>
                {posts.map((p) => (
                    <Post key={p.id} post={p} postId={p.Id} />
                ))}
            </tbody>
        </Table>
    )
}