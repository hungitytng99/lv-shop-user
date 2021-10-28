import React from "react"
import Layout from "src/components/layout/Layout"
import { Col, Container, Row } from "react-bootstrap"
import CartItem from "./../../src/components-share/Cart/cart_item/CartItem"
import Link from "next/dist/client/link"
import { format_d_currency } from "./../../src/share_function/index"
import { useSelector } from "react-redux"

const data1 = {
    quantity: 1,
    urlImg: "https://bizweb.dktcdn.net/thumb/large/100/367/937/products/2-4d4650c2-dfd4-4467-bcb4-205c692552e1.jpg?v=1615519760717",
    title: "Cửa lưới chống muỗi",
    price: 100000,
}

const data2 = {
    quantity: 5,
    urlImg: "https://bizweb.dktcdn.net/thumb/large/100/367/937/products/2-4d4650c2-dfd4-4467-bcb4-205c692552e1.jpg?v=1615519760717",
    title: "Cửa lưới chống muỗi loại to to to",
    price: 100000,
}

export default function Cart() {
    const breadcrumb = [
        {
            title: "Giỏ hàng",
            url: "/cart",
        },
    ]
    const cartData = useSelector((stores) => stores.cartSlice.value)
    const productList = cartData.products
    return (
        <div className="cart_page">
            <Layout titlePage="Giỏ hàng" breadcrumb={breadcrumb}>
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
                            )
                        })}
                        <hr />
                        <div className="cart_total_price">
                            <span>{format_d_currency(cartData.totalPrice)}</span>
                        </div>
                        <div style={{ textAlign: "right", margin: "10px 0px" }}>
                            <Link href="/" passHref>
                                <span className="btn-gray">Tiếp tục mua hàng</span>
                            </Link>
                            <span className="btn-red">Tiến hành thanh toán</span>
                        </div>
                    </div>
                </Container>
            </Layout>
        </div>
    )
}
export async function getServerSideProps() {
    try {
        return {
            props: {},
        }
    } catch (error) {
        return {
            notFound: true,
        }
    }
}
