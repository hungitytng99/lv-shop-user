import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Transport() {
    const dataCheckout = useSelector((stores) => stores.checkoutSlice.value);
    return (
        <div>
            <h5 style={{ paddingLeft: "10px" }}>Vận chuyển</h5>
            {dataCheckout.address.provinces === "-1" ? (
                <div style={{ background: "#d1ecf1", color: "#0c5460", borderRadius: "5px", padding: "10px", margin: "0px 10px" }}>Vui lòng nhập địa chỉ giao hàng</div>
            ) : (
                <Row className="box_radio">
                    <Col xs={1}>
                        <input type="radio" name="freeFee" id="free" readOnly={true} />
                    </Col>
                    <Col xs={8}>
                        <div>Miễn phí giao hàng</div>
                        <div style={{ fontSize: "small" }}>(Áp dụng cho đơn hàng từ 300K)</div>
                    </Col>
                    <Col xs={3}>
                        <span>Miễn phí</span>
                    </Col>
                </Row>
            )}
        </div>
    );
}
