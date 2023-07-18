import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

export default function Tag({ tag }) {
    return (
        <Card className="m-4">
            <CardBody>
                <strong>{tag.name}</strong>
                <p align='right'>
                    <Link to={`./Edit/${tag.id}`}>Edit</Link>
                </p>
            </CardBody>
        </Card>
    )
}