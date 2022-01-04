import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Head from "next/head";
import ReceiveAddress from "src/components/pages/checkout/ReceiveAddress";
import { ImagesPath } from "./../../src/constants/ImagesPath";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Link from "next/dist/client/link";
import Transport from "src/components/pages/checkout/Transport";
import PaymentMethod from "src/components/pages/checkout/PaymentMethod";
import { useDispatch, useSelector } from "react-redux";
import { getProductCart } from "./../../src/redux/slices/cartSlices";
import { getVisitorInformation } from "src/redux/slices/userSlice";
import CartAndCheckout from "./../../src/components/pages/checkout/CartAndCheckout";
import { userLogout } from "src/redux/slices/userSlice";
import { useRouter } from "next/router";
import { REQUEST_STATE } from "src/app-configs";
import Image from "next/dist/client/image";

export default function Checkout(props) {
    const router = useRouter();
    const dispatch = useDispatch();
    const userData = useSelector((stores) => stores.userSlice.value);
    let isUser = false;
    if (userData.data?.deviceId == null && userData.state != REQUEST_STATE.ERROR) isUser = true;
    function clickLogOut() {
        dispatch(userLogout());
        if (router.asPath == "/") {
            router.reload("/");
        } else {
            router.push("/");
        }
    }
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
                                <Image width={90} height={90} src={ImagesPath.LOGO} />
                            </Link>
                            {isUser ? (
                                <span className="login_logout" onClick={clickLogOut}>
                                    <FontAwesomeIcon icon={faSignOutAlt} /> Đăng xuất
                                </span>
                            ) : (
                                <Link href="/dang-nhap" passHref>
                                    <span className="login_logout">
                                        <FontAwesomeIcon icon={faUserCircle} /> Đăng nhập
                                    </span>
                                </Link>
                            )}
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
