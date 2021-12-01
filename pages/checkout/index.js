import React from "react"
import { Container } from "react-bootstrap"
import { Row, Col } from "react-bootstrap"
import Head from "next/head"
import ReceiveAddress from "src/components/pages/checkout/ReceiveAddress"
import { ImagesPath } from "./../../src/constants/ImagesPath"

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
                        </div>
                        <Row>
                            <Col lg={6}>
                                <ReceiveAddress />
                            </Col>
                            <Col lg={6}>Ghi chú Vận chuyển</Col>
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
