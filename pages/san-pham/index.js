import Layout from "components/layout/Layout"
import React from "react"
import { Container } from "react-bootstrap"

export default function SanPham() {
    const breadcrumb = [
        {
            title: "Tất cả sản phẩm",
            url: "/san-pham",
        },
    ]
    return (
        <div>
            <Layout titlePage="Tất cả sản phẩm" breadcrumb={breadcrumb}>
                <Container>Alo</Container>
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
