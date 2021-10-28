import React from "react"
import { Row } from "react-bootstrap"
import { Col } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { useState, useRef } from "react"
import { format_d_currency } from "./../../../share_function/index"

export default function CartItem(props) {
    const { data } = props
    const numberOrder = useRef()
    const [totalCost, setTotalCost] = useState(data.price * data.quantity)

    function increaseOder() {
        numberOrder.current.value++
        setTotalCost(data.price * Number.parseInt(numberOrder.current.value))
    }
    function decreaseOder() {
        let currentvalue = Number.parseInt(numberOrder.current.value)
        if (currentvalue > 1) {
            numberOrder.current.value--
            setTotalCost(data.price * Number.parseInt(numberOrder.current.value))
        }
    }
    function checkInputNum(e) {
        let currentvalue = Number.parseInt(numberOrder.current.value)
        if (isNaN(currentvalue) || currentvalue < 1) {
            numberOrder.current.value = "1"
        }
        setTotalCost(data.price * Number.parseInt(numberOrder.current.value))
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
                {data.title}
            </Col>
            <Col md={2} className="cart_item-price">
                {format_d_currency(data.price)}
            </Col>
            <Col md={3} xs={3}>
                <div className="order_product-quantity">
                    <span className="order_product-quantity-minus" onClick={decreaseOder}>
                        {" - "}
                    </span>
                    <input
                        ref={numberOrder}
                        onKeyUp={checkInputNum}
                        className="order_product-quantity-num"
                        defaultValue={data.quantity}
                        min="1"
                        type="number"
                    />
                    <span className="order_product-quantity-plus" onClick={increaseOder}>
                        {" + "}
                    </span>
                </div>
            </Col>
            <Col md={2} className="cart_item-total_price">
                <span>{format_d_currency(totalCost)}</span>
            </Col>
        </Row>
    )
}
