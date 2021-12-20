import { faPencilAlt, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Row, Col } from "react-bootstrap";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const fakedata = [
    {
        name: "Lê Đình Quyền",
        address: "Số 2 ngõ 165, giáp bát, hoàng mai, hà nội",
        phone: "0941158376",
    },
    {
        name: "Lê Đình Quyền",
        address: "Số 2 ngõ 165, giáp bát, hoàng mai, hà nội",
        phone: "0941158376",
    },
    {
        name: "Lê Đình Quyền",
        address: "Số 2 ngõ 165, giáp bát, hoàng mai, hà nội",
        phone: "0941158376",
    },
];

export default function ListAddress() {
    return (
        <>
            <h4 className="box_title" style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Địa chỉ nhận hàng</span>
                <span className="add_address">
                    <FontAwesomeIcon icon={faPlusCircle} />
                </span>
            </h4>
            <div className="list_address ">
                <div className="table_data">
                    <Row className="table_header">
                        <Col xs={3}>Tên</Col>
                        <Col xs={5}>Địa chỉ</Col>
                        <Col xs={2}>Số điện thoại</Col>
                        <Col xs={2}>#</Col>
                    </Row>
                    {fakedata.map((item, index) => {
                        return (
                            <Row key={"address_item" + index} className="table_row">
                                <Col xs={3}>{item.name}</Col>
                                <Col xs={5}>{item.address}</Col>
                                <Col xs={2}>{item.phone}</Col>
                                <Col xs={2}>
                                    <span className="icon_function" title="xem">
                                        <FontAwesomeIcon icon={faEye} />
                                    </span>
                                    <span className="icon_function" title="sửa">
                                        <FontAwesomeIcon icon={faPencilAlt} />{" "}
                                    </span>
                                    <span className="icon_function" title="xoá">
                                        <FontAwesomeIcon icon={faTimes} />{" "}
                                    </span>
                                </Col>
                            </Row>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
