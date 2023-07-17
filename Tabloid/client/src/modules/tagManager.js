import { getToken } from "./authManager";

const tagsUrl = "./api/Tag"

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