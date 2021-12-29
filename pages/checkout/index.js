import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Head from "next/head";
import ReceiveAddress from "src/components/pages/checkout/ReceiveAddress";
import { ImagesPath } from "./../../src/constants/ImagesPath";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Link from "next/dist/client/link";
import Transport from "src/components/pages/checkout/Transport";
import PaymentMethod from "src/components/pages/checkout/PaymentMethod";
import { useDispatch } from "react-redux";
import { getProductCart } from "./../../src/redux/slices/cartSlices";
import { getVisitorInformation } from "src/redux/slices/userSlice";
import CartAndCheckout from "./../../src/components/pages/checkout/CartAndCheckout";

export default function Checkout(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        (async () => {
            await dispatch(getVisitorInformation());
            dispatch(getProductCart());
        })();
    }, []);
    return (
        <>
            <Head>
                <title>Thanh toán</title>
            </Head>
            <Container className="checkout">
                <Row>
                    <Col lg={8}>
                        <div className="checkout_header">
                            <Link href="/" passHref>
                                <img src={ImagesPath.LOGO} />
                            </Link>
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
                                <PaymentMethod />
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={4} className="checkout_order">
                        <CartAndCheckout />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export async function getServerSideProps(context) {
    const { resolvedUrl, query, params } = context;
    const { order = "Không xác định" } = query;
    console.log({ resolvedUrl, query, params });
    try {
        return {
            props: {
                order,
            },
        };
    } catch (error) {
        return {
            notFound: true,
        };
    }
}
