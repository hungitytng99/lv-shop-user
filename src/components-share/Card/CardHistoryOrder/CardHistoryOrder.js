import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { getFullday } from "src/share_function";
import { v4 as uuidv4 } from "uuid";
import { format_d_currency } from "./../../../share_function/index";
import { userService } from "./../../../services/user/index";

export default function CardHistoryOrder(props) {
    const {
        code = "",
        orderItems = [],
        createdAt = "",
        customerName = "",
        customerAddress = "",
        customerPhone = "",
        shipFee = "",
        finalPrice = "",
        status = "",
        id = "",
    } = props.data;
    function getStatusText() {
        if (status === "NEW") {
            return <div style={{ color: "#00bcd4" }}>Đặt hàng thành công...</div>;
        }
        if (status === "COMMING") {
            return <div style={{ color: "#00bcd4" }}>Đang giao hàng...</div>;
        }
        if (status === "DONE") {
            return <div style={{ color: "#009688" }}>Đã nhận hàng.</div>;
        }
        if (status === "CANCEL") {
            return <div style={{ color: "#e91e63" }}>Đã huỷ.</div>;
        }
    }
    async function cancelOrder() {
        const res = await userService.updateOrderState(id, "CANCEL");
        console.log(res);
        props.updateListOrder(res.data);
    }
    async function doneRevieve() {
        const confr = confirm("Bạn xác nhận rằng đã nhận được hàng?");
        if (confr === true) {
            const res = await userService.updateOrderState(id, "DONE");
            console.log(res);
            props.updateListOrder(res.data);
        }
    }
    return (
        <div className="card_his_order mb-3">
            <div className="card_his_order_header">
                <div className="order_code">Mã đơn hàng: {code}</div>
                <div>
                    {getStatusText()}
                    <div>Ngày mua: {getFullday(createdAt)}</div>
                </div>
            </div>
            <Row style={{ borderBottom: "1px solid #f6470e" }}>
                <Col xs={12} md={6}>
                    Người nhận: {customerName} (phone: {customerPhone})
                </Col>

                <Col xs={12} md={6} style={{ textAlign: "right" }}>
                    Địa chỉ: {customerAddress}
                </Col>
            </Row>
            <div className="mt-3">
                {orderItems.map((item, index) => {
                    return (
                        <Row key={uuidv4()} className="mb-3">
                            <Col md={6} xs={12}>
                                <img
                                    style={{ width: "80px", height: "80px", objectFit: "cover", float: "left", marginRight: "10px" }}
                                    src={`${process.env.NEXT_PUBLIC_IMG_BASE_URL}/${item.variant?.featureImageId}`}
                                    alt=""
                                />
                                <span>{item.variant?.product?.title}</span> <br />
                                <span>
                                    {`(${item.variant?.publicTitle})`} <b style={{ color: "#f6470e" }}>x{item.quantity}</b>
                                </span>
                            </Col>
                            <Col md={3} xs={6}>
                                <span>Đơn giá:</span> <br />
                                <span style={{ color: "#f6470e", fontWeight: "bold" }}>{format_d_currency(item.price)}</span>
                            </Col>
                            <Col md={3} xs={6}>
                                <span>Thành tiền:</span> <br />
                                <span style={{ color: "#f6470e", fontWeight: "bold" }}>{format_d_currency(item.linePrice)}</span>
                            </Col>
                        </Row>
                    );
                })}
            </div>
            <div className="card_his_order_header">
                <span>Ship: {format_d_currency(shipFee)}</span>
                <span>
                    Tổng số tiền: <b style={{ color: "#f6470e", fontSize: "20px" }}>{format_d_currency(finalPrice)}</b>
                </span>
            </div>
            <div style={{ textAlign: "right" }}>
                {status === "NEW" ? (
                    <Button variant="danger" onClick={cancelOrder}>
                        Huỷ
                    </Button>
                ) : null}
                {status === "COMMING" ? (
                    <Button variant="success" onClick={doneRevieve}>
                        Đã nhận hàng
                    </Button>
                ) : null}
            </div>
        </div>
    );
}
