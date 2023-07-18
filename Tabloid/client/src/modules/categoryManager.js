import { getToken } from "./authManager";

const categories = "/api/Category"

export const getAllCategories = () => {
    return getToken().then((token) => {
        return fetch(categories, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
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

export const addCategory = (category) => {
    return getToken().then((token) => {
        return fetch(categories, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(category),
        }).then((resp) => {
            if (resp.ok) {
                return resp.json();
            } else if (resp.status === 401) {
                throw new Error("Unauthorized");
            } else {
                throw new Error(
                    "An unknown error occurred while trying to save a new category."
                );
            }
        });
    });
};

export const editCategory = (category) => {
    return getToken().then((token) => {
        fetch(`/api/Category/${category.Id}`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(category),
        }).then((resp) => {
            if (resp.ok) {
                return resp.status === 204;
            } else if (resp.status === 401) {
                throw new Error("Unauthorized");
            } else {
                throw new Error(
                    "An unknown error occurred while trying to edit a category."
                );
            }
        });
    });
};