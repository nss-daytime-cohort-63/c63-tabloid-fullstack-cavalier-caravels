import { getToken } from "./authManager";

export const getAllVideos = () => {
    return getToken().then((token) => {
        return fetch(categories, {
            method: "GET",
            headers: {
                Authorizxation: `Bearer ${token}`,
            },
        }).then((resp) => {
            if (resp.ok) {
                return resp.json();
            } else {
                throw new Error(
                    "An unknown error occurred while trying to get videos."
                );
            }
        });
    });
};