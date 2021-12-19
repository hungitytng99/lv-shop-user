import React from "react"
import { Container } from "react-bootstrap"
import { Row, Col } from "react-bootstrap"
import Head from "next/head"
import ReceiveAddress from "src/components/pages/checkout/ReceiveAddress"
import { ImagesPath } from "./../../src/constants/ImagesPath"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserCircle } from "@fortawesome/free-solid-svg-icons"
import Link from "next/dist/client/link"
import Transport from "src/components/pages/checkout/Transport"

export default function Checkout(props) {
    return (
        <>
            <Head>
                <title>Thanh toán</title>
            </Head>
            <Container className="checkout">
                <Row>
                    <Col lg={8}>
                        <div className="checkout_header">
                            <img src={ImagesPath.LOGO} />
                            <Link href="/dang-nhap" passHref>
                                <span className="login_logout">
                                    <FontAwesomeIcon icon={faUserCircle} /> Đăng nhập
                                </span>
                            </Link>
                        </div>
                        <Row>
                            <Col lg={6}>
                                <ReceiveAddress />
                            </Col>
                            <Col lg={6}>
                                <Transport />
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={4} className="checkout_order">
                        Đơn hàng (3 sản phẩm)
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export async function getServerSideProps(context) {
    const { resolvedUrl, query, params } = context
    const { order = "Không xác định" } = query
    console.log({ resolvedUrl, query, params })
    try {
        return {
            props: {
                order,
            },
        }
    } catch (error) {
        return {
            notFound: true,
        }
    }
}
