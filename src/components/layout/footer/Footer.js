import React from "react"
import { Container, Row, Col } from "react-bootstrap"
export default function Footer() {
    return (
        <div className="footer">
            <Container>
                <div className="footer-get_email box_title">
                    <Row>
                        <Col xs={12} md={6}>
                            <h3>Đăng ký nhận tin khuyến mãi</h3>
                        </Col>
                        <Col xs={12} md={6}>
                            <Row className="input-email">
                                <Col xd={12} md={9}>
                                    <input placeholder="Nhập email ở đây..."></input>
                                </Col>
                                <Col xd={12} md={3}>
                                    <button>Đăng ký</button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <div className="footer-shop_information"></div>
            </Container>
        </div>
    )
}
