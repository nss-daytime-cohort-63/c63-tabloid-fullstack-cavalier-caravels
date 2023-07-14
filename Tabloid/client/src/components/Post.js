import { Table } from "reactstrap";

export default function Post({ post }) {
    return (
        <tr>
          <th scope="row">
            {post.Title}
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