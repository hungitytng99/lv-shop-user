import React from "react";
import Head from "next/head";
import Layout from "src/components/layout/Layout";
import { Col, Container, Row } from "react-bootstrap";
import CartItem from "./../../src/components-share/Cart/cart_item/CartItem";
import Link from "next/dist/client/link";
import { format_d_currency } from "./../../src/share_function/index";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { cartService } from "./../../src/services/cart/index";

export default function Cart() {
    const breadcrumb = [
        {
            title: "Giỏ hàng",
            url: "/cart",
        },
    ];
    const cartData = useSelector((stores) => stores.cartSlice.value);
    const productList = cartData.products;
    const router = useRouter();
    async function checkout() {
        const res = await cartService.checkCartAvailableForCheckout();
        // console.log(res);
        if (res.data.length > 0) {
            alert("Có sản phẩm vượt quá số lượng hiện có của shop.\nVui lòng chọn lại.");
        } else {
            router.push("/checkout");
        }
    }
    return (
        <>
            <Head>
                <title>{breadcrumb[0].title}</title>
            </Head>
            <Layout titlePage="Giỏ hàng" breadcrumb={breadcrumb}>
                <div className="cart_page">
                    <Container>
                        <h3 style={{ margin: "20px 0px" }}>Giỏ hàng của bạn</h3>
                        <div className="cart_page-table">
                            <Row className="cart_page-headtable" style={{}}>
                                <Col md={1}></Col>
                                <Col md={1}></Col>
                                <Col md={3}>Sản phẩm</Col>
                                <Col md={2}>Giá</Col>
                                <Col md={3}>Số lượng</Col>
                                <Col md={2}>Thành tiền</Col>
                            </Row>
                            {productList?.map((item, index) => {
                                return (
                                    <div key={"productcart" + index}>
                                        <CartItem data={item}></CartItem>
                                    </div>
                                );
                            })}
                            <hr />
                            <div className="cart_total_price">
                                <span>{format_d_currency(cartData.totalPrice)}</span>
                            </div>
                            <div style={{ textAlign: "right", margin: "10px 0px" }}>
                                <Link href="/" passHref>
                                    <span className="btn-gray">Tiếp tục mua hàng</span>
                                </Link>
                                {/* <Link href={cartData.totalProduct == 0 ? "#" : "/checkout"} passHref> */}
                                <span className={`btn-red ${cartData.totalProduct == 0 ? "btn-disable" : ""}`} onClick={cartData.totalProduct == 0 ? () => {} : () => checkout()}>
                                    Tiến hành thanh toán
                                </span>
                                {/* </Link> */}
                            </div>
                        </div>
                    </Container>
                </div>
            </Layout>
        </>
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
