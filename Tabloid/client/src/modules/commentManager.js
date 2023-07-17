import { getToken } from "./authManager";

const comments = "./api/Comment"


export const getAllCommentsByPostId =(id)=>{
    getToken().then((token) =>
    fetch(`${comments}/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((resp) => {
     if (resp.ok)
     {
        return resp.json();
     }
     else {
        throw new Error(
            "an error has occured."
        );
     };
    })
)}