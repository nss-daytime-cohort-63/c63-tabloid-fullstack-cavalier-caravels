import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

export default function Category({ category }) {
    return (
        <Card className="m-4">
            <CardBody>
                <strong>{category.name}</strong>
                <p align="right">
                    <Link to={`./Edit/${category.id}`}>Edit</Link>
                </p>
            </CardBody>
        </Card >
    )
}