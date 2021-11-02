import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { Col, Row } from "react-bootstrap"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { format_d_currency } from "./../../../share_function/index"

export default function CartItemReview(props) {
    const { title, urlImg, price, quantity } = props.data
    return (
        <Row className="cart_item_review ">
            <Col xs={5} className="no_pading_col">
                <Row className="no_pading_col">
                    <Col xs={4} style={{ textAlign: "center" }}>
                        <span className="cart_item_review-remove">
                            <FontAwesomeIcon icon={faTimes} />
                        </span>
                    </Col>
                    <Col xs={8}>
                        <img className="cart_item_review-img" src={urlImg} />
                    </Col>
                </Row>
            </Col>
            <Col xs={7}>
                <p className="cart_item_review-title">{title}</p>
                <div className="cart_item_review-price">
                    <span>{format_d_currency(price)}</span>
                    <span>{"   x" + quantity}</span>
                </div>
            </Col>
        </Row>
    )
}
