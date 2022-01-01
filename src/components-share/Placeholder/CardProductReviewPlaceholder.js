import React from "react";
import { Card, Col, Placeholder, Row } from "react-bootstrap";

export default function CardProductReviewPlaceholder() {
    return (
        <Card style={{ width: "100%", border: "none", boxShadow: "0px 2px 46.41px 4.59px rgb(2 38 113 / 8%)" }}>
            <Placeholder as={Card.Img} variant="top" style={{ aspectRatio: "5/3", maxHeight: "116px" }}></Placeholder>
            <Card.Body>
                <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={12} />
                </Placeholder>
                <Row>
                    <Col xs={6}>
                        <Placeholder as={Card.Text} animation="wave">
                            <Placeholder xs={12} />
                        </Placeholder>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}
