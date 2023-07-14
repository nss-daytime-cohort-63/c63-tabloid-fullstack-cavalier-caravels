import { Table } from "reactstrap";

export default function Post({ post }) {
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
        </tr>     
    )
}