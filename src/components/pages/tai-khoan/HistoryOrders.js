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
                        <Col>Đơn hàng</Col>
                        <Col>Ngày</Col>
                        <Col>Địa chỉ nhận</Col>
                        <Col>Giá trị</Col>
                        <Col>TT thanh toán</Col>
                        <Col>TT vận chuyển</Col>
                    </Row>
                </div>
            </div>
        </>
    );
}
