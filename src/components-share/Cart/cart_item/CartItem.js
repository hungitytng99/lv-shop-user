import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";
import { format_d_currency } from "./../../../share_function/index";
import Link from "next/dist/client/link";
import { useDispatch } from "react-redux";
import { updateProductCart } from "src/redux/slices/cartSlices";

export default function CartItem(props) {
    const { data } = props;
    const dispatch = useDispatch();
    const numberOrder = useRef();

    function increaseOder() {
        numberOrder.current.value++;
        dispatch(updateProductCart({ idCartItem: data.cartId, params: { variantId: data.variantId, quantity: numberOrder.current.value } }));
    }
    function decreaseOder() {
        let currentvalue = Number.parseInt(numberOrder.current.value);
        if (currentvalue > 1) {
            numberOrder.current.value--;
            dispatch(updateProductCart({ idCartItem: data.cartId, params: { variantId: data.variantId, quantity: numberOrder.current.value } }));
        }
    }
    function checkInputNum(e) {
        let currentvalue = Number.parseInt(numberOrder.current.value);
        if (isNaN(currentvalue) || currentvalue < 1) {
            numberOrder.current.value = "1";
            dispatch(updateProductCart({ idCartItem: data.cartId, params: { variantId: data.variantId, quantity: 1 } }));
        } else {
            dispatch(updateProductCart({ idCartItem: data.cartId, params: { variantId: data.variantId, quantity: numberOrder.current.value } }));
        }
    }
    return (
        <Row className="cart_item">
            <Col md={1} xs={0}>
                <span className="cart_item-delete">
                    <FontAwesomeIcon icon={faTimes} />
                </span>
            </Col>
            <Col md={1} xs={4} className="cart_item-img">
                <img src={data.urlImg} />
            </Col>
            <Col md={3} xs={5} className="cart_item-title">
                <Link href={data.urlProduct} passHref>
                    <span>
                        <span>{data.title}</span> <br />
                        <span>{data.variantTitle}</span>
                    </span>
                </Link>
            </Col>
            <Col md={2} className="cart_item-price">
                {format_d_currency(data.price)}
            </Col>
            <Col md={3} xs={3}>
                <div className="order_product-quantity">
                    <span className="order_product-quantity-minus" onClick={decreaseOder}>
                        {" - "}
                    </span>
                    <input ref={numberOrder} onKeyUp={checkInputNum} className="order_product-quantity-num" defaultValue={data.quantity} min="1" type="number" />
                    <span className="order_product-quantity-plus" onClick={increaseOder}>
                        {" + "}
                    </span>
                </div>
            </Col>
            <Col md={2} className="cart_item-total_price">
                <span>{format_d_currency(data.totalPrice)}</span>
            </Col>
        </Row>
    );
}
