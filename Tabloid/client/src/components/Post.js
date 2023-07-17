import { Table } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

export default function Post({ post }) {
    const navigate = useNavigate()
    return (
        <tr>
          <th scope="row">
            {post.title}
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