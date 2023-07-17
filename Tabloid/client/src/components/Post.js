import { Table } from "reactstrap";
<<<<<<< HEAD
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

export default function Post({ post }) {
    const navigate = useNavigate()
=======
import { Link } from "react-router-dom";

export default function Post({ post, postId }) {
>>>>>>> main
    return (
        <tr>
          <th scope="row">
            <Link to={`./${post.id}`}>{post.title}</Link>
          </th>
          <td>
          {post.userProfile.firstName} {post.userProfile.lastName}
          </td>
          <td>
            {post.category.name}
          </td>
          <td>
           
          </td>
        </tr>     
    )
}