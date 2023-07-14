import { Card, CardBody } from "reactstrap";

export default function Category({ category }) {
    return (
        <Card classnName="m-4">
            <CardBody>
                <strong>{category.name}</strong>
            </CardBody>
        </Card>
    )
}