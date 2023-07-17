import { getToken } from "./authManager";

const postsURL = "/api/Post"

export const getAllPosts = () => {
    return getToken().then((token) => {
        return fetch(postsURL, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error(
                    "Screwed up your fetch call homeskillet!"
                );
            }
        });
    });
};

export const getPost = (id) => {
    return getToken().then((token) => {
        return fetch(`${postsURL}/${id}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error(
                    "Screwed up your fetch call homeskillet!"
                );
            }
        });
    });
};

export const addPost = (post) => {
    return getToken().then((token) => {
        return fetch(postsURL, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
        }).then((res) => {
            if (res.ok) {
                return res.json();
            } else if (res.status === 401) {
                throw new Error("Unathorized");
            } else {
                throw new Error(
                    "Dagnabit! You can't add that!"
                );
            }
        });
    });
};