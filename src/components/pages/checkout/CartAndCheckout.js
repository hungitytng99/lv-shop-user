import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Col, Row, FloatingLabel, Form, Button } from "react-bootstrap";
import { format_d_currency } from "./../../../share_function/index";
import { useEffect } from "react";
import { cartService } from "./../../../services/cart/index";
import Link from "next/dist/client/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faCheckCircle, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

export default function CartAndCheckout() {
    const dataCheckout = useSelector((stores) => stores.checkoutSlice.value);
    const [alertBox, setAlertBox] = useState({ open: false, type: "success", content: "", icon: faCheckCircle });
    const [cartData, setCartData] = useState({});
    useEffect(() => {
        (async () => {
            const response = await cartService.getCheckoutData();
            // console.log(response);
            setCartData(response);
        })();
    }, []);

    function checkMissInput() {
        if (dataCheckout.name === "") {
            return "name";
        }
        if (dataCheckout.phone === "") {
            return "phone";
        }
        if (dataCheckout.address.provinces === "-1") {
            return "city";
        }
        return "full";
    }

    function order() {
        const missData = checkMissInput();
        if (missData === "full") {
            const dataOrder = {
                customerAddress: `${dataCheckout.address.street} ${dataCheckout.text_address.wards} ${dataCheckout.text_address.districts} ${dataCheckout.text_address.provinces}`,
                detailCustomerAddress: "string",
                comment: dataCheckout.note,
                customerEmail: "",
                customerName: dataCheckout.name,
                customerPhone: dataCheckout.phone,
                paymentMethod: dataCheckout.paymentMethod,
                status: "",
                deliveryMethod: "",
                shipFee: cartData.shipFee,
                orderItems: cartData.products.map((item) => {
                    return {
                        variantId: item.variantId,
                        quantity: item.quantity,
                    };
                }),
            };
            console.log(dataOrder);
            setAlertBox({ open: true, type: "success", content: "Đặt hàng thành công", icon: faCheckCircle });
        } else {
            if (missData === "name") {
                setAlertBox({ open: true, type: "warning", content: "Vui lòng nhập tên của bạn.", icon: faExclamationTriangle });
            } else if (missData === "phone") {
                setAlertBox({ open: true, type: "warning", content: "Vui lòng nhập số điện thoại của bạn.", icon: faExclamationTriangle });
            } else if (missData === "city") {
                setAlertBox({ open: true, type: "warning", content: "Vui lòng chọn địa điểm nhận hàng.", icon: faExclamationTriangle });
            }
            setTimeout(() => {
                setAlertBox({ open: false, type: "", content: "", icon: faCheckCircle });
            }, 2000);
        }
    }

    return (
        <div className="cart_and_checkout">
            <h5 style={{ marginTop: "15px" }}>Đơn hàng: {cartData?.totalProduct} sản phẩm</h5>
            <hr />
            {cartData?.products?.map((item, index) => {
                return (
                    <Row key={item.urlProduct + index} className="mb-3">
                        <Col xs={2} className="box_img">
                            <div>
                                <img src={item.urlImg} alt="locvungshop" />
                                <span className="quantity">{item.quantity}</span>
                            </div>
                        </Col>
                        <Col xs={7} className="title">
                            <div>{item.title}</div>
                            <div>{item.variantTitle}</div>
                        </Col>
                        <Col xs={3} style={{ textAlign: "right" }}>
                            {format_d_currency(item.totalPrice)}
                        </Col>
                    </Row>
                );
            })}
            <hr />
            <Row>
                <Col xs={8}>
                    <FloatingLabel controlId="discountInput" label="Nhập mã giảm giá">
                        <Form.Control type="text" placeholder="" />
                    </FloatingLabel>
                </Col>
                <Col xs={4}>
                    <Button variant="info" style={{ height: "58px", width: "100%" }}>
                        Áp dụng
                    </Button>
                </Col>
            </Row>
            <hr />
            <div className="flex_space_between">
                <span>Tạm tính: </span>
                <span>{format_d_currency(cartData?.totalPrice)}</span>
            </div>
            <div className="flex_space_between">
                <span>Phí vận chuyển: </span>
                <span>{format_d_currency(cartData?.shipFee)}</span>
            </div>
            <hr />
            <div className="flex_space_between" style={{ fontSize: "x-large" }}>
                <span>Tổng cộng:</span>
                <span style={{ color: "#2a9dcc" }}>{format_d_currency(cartData?.finalPrice)}</span>
            </div>
            <div className="flex_space_between" style={{ marginTop: "20px" }}>
                <Link href="/cart" passHref>
                    <span className="backtocart">
                        <FontAwesomeIcon icon={faChevronLeft} /> {"Quay về giỏ hàng"}
                    </span>
                </Link>
                <Button variant="success" onClick={order}>
                    Đặt hàng
                </Button>
            </div>
            <div className={`alert_box ${alertBox.type}`} style={{ top: alertBox.open ? "50px" : "-100px" }}>
                <div className="alert_content">
                    <span>
                        <FontAwesomeIcon icon={alertBox.icon} />
                    </span>
                    <span style={{ marginLeft: "15px" }}>{alertBox.content}</span>
                </div>
            </div>
        </div>
    );
}
