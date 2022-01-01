import React from "react";
import Layout from "src/components/layout/Layout";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { faStackExchange } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function LienHe() {
    const breadcrumb = [
        {
            title: "Liên Hệ",
            url: "/lien-he",
        },
    ];
    return (
        <div>
            <Layout titlePage="Liên Hệ" breadcrumb={breadcrumb}>
                <Container className="lien_he">
                    <Row>
                        <Col lg={4} sm={12} md={12}>
                            <div className="contact-info">
                                <ul>
                                    <li className="address">
                                        <span className="icon">
                                            <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
                                        </span>
                                        <span className="content">Chung cư VP5, Nguyễn Duy Trinh, bán đảo Linh Đàm, Hoàng Mai, Hà Nội</span>
                                    </li>
                                    <li className="phone">
                                        <span className="icon">
                                            <FontAwesomeIcon icon={faMobileAlt}></FontAwesomeIcon>
                                        </span>
                                        <Link href={{ pathname: "tel:0962020446" }} passHref>
                                            <span className="content">0962.020.446</span>
                                        </Link>
                                    </li>
                                    <li className="email">
                                        <span className="icon">
                                            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                                        </span>
                                        <span className="content">contact@tienichxanh.com.vn</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="get-customer-info">
                                <Row>
                                    <div className="information">
                                        <Col ld={12} sm={12} md={12}>
                                            <h3 style={{ marginBottom: "20px" }}>Liên hệ</h3>
                                        </Col>
                                        <Col ld={12} sm={12} md={12}>
                                            <input placeholder="Họ và tên"></input>
                                        </Col>
                                        <Col ld={12} sm={12} md={12}>
                                            <input placeholder="Email"></input>
                                        </Col>
                                        <Col ld={12} sm={12} md={12}>
                                            <input className="content" placeholder="Nội dung"></input>
                                        </Col>
                                        <Col ld={12} sm={12} md={12}>
                                            <button>Gửi liên hệ</button>
                                        </Col>
                                    </div>
                                </Row>
                            </div>
                        </Col>
                        <Col lg={8} sm={12} md={12}>
                            <div className="map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d59587.17725798849!2d105.81996841961926!3d21.024738945589732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1640969310959!5m2!1svi!2s"
                                    width="100%"
                                    height="400"
                                    style={{ border: 0, borderRadius: "5px" }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    className="gg-map"
                                ></iframe>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Layout>
        </div>
    );
}

export async function getServerSideProps() {
    try {
        return {
            props: {},
        };
    } catch (error) {
        return {
            notFound: true,
        };
    }
}
