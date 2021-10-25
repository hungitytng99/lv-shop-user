import React from "react"
import { ImagesPath } from "../../../constants/ImagesPath"
import { Container, Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPodcast } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import Image from "next/image"
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
                <div className="footer-shop_information">
                    <Row>
                        <Col xs={12} sm={4}>
                            <div className="contact">
                                <h4 className="title-info">Liên hệ</h4>
                                <div className="contact-info">
                                    <div className="contact-info-logo">
                                        <img src={ImagesPath.LOGO}></img>
                                    </div>
                                    <div className="contact-info-item">
                                        <div className="item">
                                            <b>Tiện ích Xanh</b>{" "}
                                        </div>
                                        <div className="item">
                                            <span>
                                                <span style={{ color: "#f6470e" }}>Địa chỉ: </span>
                                                <span>Chung cư VP5, Nguyễn Duy Trinh, Quận Hoàng Mai, Hà Nội</span>
                                            </span>
                                        </div>
                                        <div className="item">
                                            <span>
                                                <span style={{ color: "#f6470e" }}>Hotline: </span>
                                                <Link href={{ pathname: "tel:0962020446" }} passHref>
                                                    <span className="hotline-item">0962.020.446</span>
                                                </Link>
                                            </span>
                                        </div>
                                        <span>Giấy ĐKKD MST: 0601199076, Sở Kế Hoạch Và Đầu Tư Tỉnh Nam Định Cấp: 07/07/2020</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={2}>
                            <div className="list-info">
                                <h4 className="title-info">Về chúng tôi</h4>
                                <input id="toggle-footer-1" className="toggle-footer-menu" type="checkbox"></input>
                                <label htmlFor="toggle-footer-1" className="toggle-footer-menu-button"></label>
                                <ul className="list-info-ul">
                                    <li className="item-info">
                                        <Link href="/">
                                            <span>Trang chủ</span>
                                        </Link>
                                    </li>
                                    <li className="item-info">
                                        <Link href="/gioi-thieu">
                                            <span>Giới thiệu</span>
                                        </Link>
                                    </li>
                                    <li className="item-info">
                                        <Link href="/san-pham">
                                            <span>Sản phẩm</span>
                                        </Link>
                                    </li>
                                    <li className="item-info">
                                        <Link href="/tin-tuc">
                                            <span>Tin tức</span>
                                        </Link>
                                    </li>
                                    <li className="item-info">
                                        <Link href="/lien-he">
                                            <span>Liên hệ</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col xs={12} sm={3}>
                            <div className="list-info">
                                <h4 className="title-info">Chính sách</h4>
                                <input id="toggle-footer-2" className="toggle-footer-menu" type="checkbox"></input>
                                <label htmlFor="toggle-footer-2" className="toggle-footer-menu-button"></label>
                                <ul className="list-info-ul">
                                    <li className="item-policy">
                                        <Link href="/chinh-sach-bao-mat">
                                            <span>Chính sách bảo mật</span>
                                        </Link>
                                    </li>
                                    <li className="item-policy">
                                        <Link href="#">
                                            <span>Chính sách vận chuyển</span>
                                        </Link>
                                    </li>
                                    <li className="item-policy">
                                        <Link href="#">
                                            <span>Chính sách bảo hành</span>
                                        </Link>
                                    </li>
                                    <li className="item-policy">
                                        <Link href="#">
                                            <span>Chính sách đổi trả</span>
                                        </Link>
                                    </li>
                                    <li className="item-policy">
                                        <Link href="#">
                                            <span>Chính sách thanh toán</span>
                                        </Link>
                                    </li>
                                    <li className="item-policy">
                                        <Link href="#">
                                            <span>Quy định sử dụng</span>
                                        </Link>
                                    </li>
                                    <li className="item-policy">
                                        <Link href="#">
                                            <span>Hướng dẫn mua hàng</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col xs={12} sm={3}>
                            <div className="payment">
                                <h4 className="title-info">Hỗ trợ thanh toán</h4>
                                <div className="payment-image">
                                    <img src={ImagesPath.PAYMENT_LOGO} style={{ width: "-webkit-fill-available" }}></img>
                                </div>
                                <div>
                                    <h4 className="title-info">Tổng đài hỗ trợ</h4>
                                </div>
                                <div className="tel-contact" style={{ color: "#f6470e", fontSize: "30px" }}>
                                    <FontAwesomeIcon icon={faPodcast}></FontAwesomeIcon>
                                    <span style={{ marginLeft: "20px" }}>0363.181.888</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}
