import React from "react"
import Layout from "src/components/layout/Layout"
import { Container } from "react-bootstrap"
export default function index() {
    const breadcrumb = [
        {
            title: "Thông tin tài khoản",
            url: "/tai-khoan",
        },
    ]
    return (
        <div>
            <Layout titlePage={breadcrumb[0].title} breadcrumb={breadcrumb}>
                <Container>alo</Container>
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
