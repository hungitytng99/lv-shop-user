import React from "react"
import Head from "next/head"
import Layout from "src/components/layout/Layout"
import { Container, Row, Col } from "react-bootstrap"

import { chiTietSanPham } from "src/constants/dataTest"
import ProductDetail from "src/components/pages/san-pham/chi-tiet-san-pham/ProductDetail"
import TabsInfor from "src/components/pages/san-pham/tabsInfor/TabsInfor"

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
