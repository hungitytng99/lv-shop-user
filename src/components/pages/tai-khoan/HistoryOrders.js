import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

export default function HistoryOrders() {
    return (
        <>
            <h4 className="box_title">Lịch sử đặt hàng</h4>
            <div className="history_orders">
                <div className="table_data">
                    <Row className="table_header">
                        <Col xs={2}>Đơn hàng</Col>
                        <Col xs={2}>Ngày</Col>
                        <Col xs={2}>Địa chỉ nhận</Col>
                        <Col xs={2}>Giá trị</Col>
                        <Col xs={2}>TT thanh toán</Col>
                        <Col xs={2}>TT vận chuyển</Col>
                    </Row>
                </div>
            </div>
        </>
    );
}
