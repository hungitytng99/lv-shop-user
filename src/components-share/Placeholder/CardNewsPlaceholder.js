import React from "react";
import { Card, Col, Placeholder, Row } from "react-bootstrap";

export default function CardNewsPlaceholder() {
    return (
        <Card style={{ width: "100%", border: "none", boxShadow: "0px 2px 46.41px 4.59px rgb(2 38 113 / 8%)" }}>
            <Placeholder as={Card.Img} variant="top" style={{ aspectRatio: "1/1" }}></Placeholder>
            <Card.Body>
                <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={12} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="wave">
                    <Placeholder xs={12} />
                </Placeholder>
                <hr />

                <Placeholder as={Card.Text} animation="wave">
                    <Placeholder xs={12} />
                </Placeholder>
            </Card.Body>
        </Card>
    );
}
