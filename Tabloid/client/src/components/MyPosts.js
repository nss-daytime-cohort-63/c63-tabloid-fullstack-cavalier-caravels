import React, { useEffect, useState } from "react";
import { getUserPosts } from "../modules/postManager";
import { Table, Button } from "reactstrap";
import Post from "./Post";

export default function MyPosts( {userProfile }) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (userProfile) {
            getUserPosts(userProfile.id).then(setPosts);
        }
    }, [userProfile]);

    return (
        <>
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