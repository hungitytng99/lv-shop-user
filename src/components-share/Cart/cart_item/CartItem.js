import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";
import { format_d_currency } from "./../../../share_function/index";
import Link from "next/dist/client/link";
import { useDispatch } from "react-redux";
import { updateProductCart, deleteCartItem } from "src/redux/slices/cartSlices";

export default function CartItem(props) {
    const { data } = props;
    const dispatch = useDispatch();
    const numberOrder = useRef();

    function increaseOder() {
        numberOrder.current.value++;
        dispatch(updateProductCart({ idCartItem: data.id, params: { variantId: data.variantId, quantity: Number.parseInt(numberOrder.current.value) } }));
    }
    function decreaseOder() {
        let currentvalue = Number.parseInt(numberOrder.current.value);
        if (currentvalue > 1) {
            numberOrder.current.value--;
            dispatch(updateProductCart({ idCartItem: data.id, params: { variantId: data.variantId, quantity: Number.parseInt(numberOrder.current.value) } }));
        }
    }
    function checkInputNum(e) {
        let currentvalue = Number.parseInt(numberOrder.current.value);
        if (isNaN(currentvalue) || currentvalue < 1) {
            numberOrder.current.value = "1";
            dispatch(updateProductCart({ idCartItem: data.id, params: { variantId: data.variantId, quantity: 1 } }));
        } else {
            dispatch(updateProductCart({ idCartItem: data.id, params: { variantId: data.variantId, quantity: Number.parseInt(numberOrder.current.value) } }));
        }
    }
    function deleteItem() {
        dispatch(deleteCartItem(data.id));
    }
    return (
        <Row className="cart_item">
            <Col md={1} xs={0}>
                <span className="cart_item-delete" onClick={deleteItem}>
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
            <Col md={3} xs={3} style={{ flexDirection: "column" }}>
                <div className="order_product-quantity">
                    <span className="order_product-quantity-minus" onClick={decreaseOder}>
                        {" - "}
                    </span>
                    <input ref={numberOrder} onKeyUp={checkInputNum} className="order_product-quantity-num" defaultValue={data.quantity} min="1" type="number" />
                    <span className="order_product-quantity-plus" onClick={increaseOder}>
                        {" + "}
                    </span>
                </div>
                <div style={{ fontSize: "13px", opacity: "0.7", marginBottom: "-20px" }}>{data.availableNumber}sp hiện có</div>
            </Col>
            <Col md={2} className="cart_item-total_price">
                <span>{format_d_currency(data.totalPrice)}</span>
            </Col>
        </Row>
    );
}
