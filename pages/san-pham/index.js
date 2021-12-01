import React from "react"
import Head from "next/head"
import Layout from "src/components/layout/Layout"
import { Container, Row, Col } from "react-bootstrap"
import CardProduct from "src/components-share/Card/CardProduct/CardProduct"
import CarouselProduct from "src/components-share/Carousel/CarouselProduct"

import { chiTietSanPham } from "src/constants/dataTest"
import ProductDetail from "src/components/pages/san-pham/chi-tiet-san-pham/ProductDetail"
import TabsInfor from "src/components/pages/san-pham/tabsInfor/TabsInfor"

const productData = {
    urlImg: "https://bizweb.dktcdn.net/100/367/937/themes/740363/assets/col1.jpg?1630998054887",
    urlProduct: "/san-pham?product_id=jfdhjsdkfhhfkfhkjsdhfjkdhfjhf",
    title: "Tiện ích nhà bếp",
    curPrice: 120000,
    status: "new",
}
const productData2 = {
    urlImg: "https://bizweb.dktcdn.net/100/367/937/themes/740363/assets/col1.jpg?1630998054887",
    urlProduct: "/san-pham?product_id=cainaymoilam",
    title: "Tiện ích nhà bếp",
    curPrice: 120000,
    oldPrice: 120300,
    status: "sale",
}

export default function SanPham(props) {
    const { product_id } = props
    const breadcrumb = [
        {
            title: "Sản phẩm",
            url: "/san-pham/all",
        },
        {
            title: "Găng tay đi xe máy mùa đông lót nỉ",
            url: "/san-pham?product_id=" + product_id,
        },
    ]
    return (
        <>
            <Head>
                <title>{breadcrumb[1].title}</title>
            </Head>
            <Layout titlePage={breadcrumb[1].title} breadcrumb={breadcrumb}>
                <Container className="san_pham">
                    <ProductDetail product={chiTietSanPham} />
                    <TabsInfor />
                    <div>
                        <div className="box_title">
                            <h4 style={{ textAlign: "center" }}>Sản phẩm liên quan</h4>
                        </div>
                        <div style={{ boxShadow: "0px 0px 25px 0px #d3dbee" }}>
                            <CarouselProduct>
                                <CardProduct data={productData} />
                                <CardProduct data={productData2} />
                                <CardProduct data={productData} />
                                <CardProduct data={productData2} />
                                <CardProduct data={productData2} />
                                <CardProduct data={productData} />
                                <CardProduct data={productData2} />
                                <CardProduct data={productData} />
                                <CardProduct data={productData} />
                                <CardProduct data={productData2} />
                            </CarouselProduct>
                        </div>
                    </div>
                </Container>
            </Layout>
        </>
    )
}

export async function getServerSideProps(context) {
    const { resolvedUrl, query, params } = context
    const { product_id = "Không xác định" } = query
    console.log({ resolvedUrl, query, params })
    try {
        return {
            props: {
                product_id,
            },
        }
    } catch (error) {
        return {
            notFound: true,
        }
    }
}
