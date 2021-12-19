import React from "react"
import { Col, Row } from "react-bootstrap"

export default function Transport() {
    return (
        <div>
            <h5>Vận chuyển</h5>
            <Row className="box_radio">
                <Col xs={1}>
                    <input type="radio" name="freeFee" id="free" />
                </Col>
                <Col xs={8}>
                    <label htmlFor="free">
                        <div>Miễn phí giao hàng</div>
                        <div style={{ fontSize: "small" }}>(Áp dụng cho đơn hàng từ 300K)</div>
                    </label>
                </Col>
                <Col xs={3}>
                    <span>Miễn phí</span>
                </Col>
            </Row>
        </div>
    )
}
