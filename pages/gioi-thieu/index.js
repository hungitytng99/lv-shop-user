import React from "react"
import Layout from "src/components/layout/Layout"
import { Container } from "react-bootstrap"
export default function GioiThieu() {
    const breadcrumb = [
        {
            title: "Giới thiệu",
            url: "/gioi-thieu",
        },
    ]
    return (
        <div>
            <Layout titlePage="Giới thiệu" breadcrumb={breadcrumb}>
                <Container>Giới thiệu</Container>
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
