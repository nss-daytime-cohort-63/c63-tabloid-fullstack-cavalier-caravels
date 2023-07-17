import { Table } from "reactstrap";
import { Link } from "react-router-dom";

export default function Post({ post, postId }) {
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
        </tr>     
    )
}