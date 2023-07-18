import { useParams } from "react-router-dom";
import { getToken } from "./authManager";

const tagsUrl = "/api/Tag"

export const getAllTags = () => {
    return getToken().then((token) => {
        return fetch(tagsUrl, {
            method: "GET",
            headers: {
                Authorization: `bearer ${token}`,
            },
        }).then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error(
                    "There was an error with the request"
                );
            }
        });
    });
};

export const addTag = (tag) => {
    return getToken().then((token) => {
        return fetch(tagsUrl, {
            method: "POST",
            headers: {
                Authorization: `bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(tag),
        }).then((res) => {
            if (res.ok) {
                return res.json();
            } else if (res.status === 401) {
                throw new Error("Unauthorized");
            } else {
                throw new Error(
                    "An unknown error occured while trying to save a new tag."
                );
            }
        });
    });
};

export const editTag = (tag) => {
    return getToken().then((token) => {
        return fetch(`${tagsUrl}/${tag.Id}`, {
            method: "Put",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tag),
        }).then((res) => {
            if (res.ok) {
                return res.status === 204;
            } else if (res.status === 401) {
                throw new Error("Unauthorized");
            } else {
                throw new Error(
                    "An unknown error occured while trying to edit a tag."
                );
            }
        });
    });
};