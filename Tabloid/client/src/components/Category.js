import { Card, CardBody } from "reactstrap";

export default function Category({ category }) {
    return (
        <Card className="m-4">
            <CardBody>
                <strong>{category.name}</strong>
                <p align="right">
                    <input type="button" value="Edit" />
                    <input type="button" value="Delete" />
                </p>
            </CardBody>
        </Card >
    )
}