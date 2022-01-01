import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { format_d_currency } from "./../../../share_function/index";
import Link from "next/dist/client/link";
import { useDispatch } from "react-redux";
import { deleteCartItem } from "src/redux/slices/cartSlices";

export default function CartItemReview(props) {
    const { id, title, urlImg, price, quantity, urlProduct, variantTitle } = props.data;
    const dispatch = useDispatch();
    const deleteProduct = () => {
        dispatch(deleteCartItem(id));
    };
    return (
        <Row className="cart_item_review ">
            <Col xs={5} className="no_pading_col">
                <Row className="no_pading_col">
                    <Col xs={4} style={{ textAlign: "center" }}>
                        <span className="cart_item_review-remove" onClick={deleteProduct}>
                            <FontAwesomeIcon icon={faTimes} />
                        </span>
                    </Col>
                    <Link href={urlProduct} passHref>
                        <Col xs={8}>
                            <img className="cart_item_review-img" src={urlImg} />
                        </Col>
                    </Link>
                </Row>
            </Col>
            <Link href={urlProduct} passHref>
                <Col xs={7}>
                    <p className="cart_item_review-title">
                        <span className="overflow_ellipsis">{title}</span>
                        <span>{variantTitle}</span>
                    </p>
                    <div className="cart_item_review-price">
                        <span>{format_d_currency(price)}</span>
                        <span>{"   x" + quantity}</span>
                    </div>
                </Col>
            </Link>
        </Row>
    );
}
