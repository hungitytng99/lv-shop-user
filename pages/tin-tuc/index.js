import React from "react"
import Layout from "src/components/layout/Layout"
import { Container } from "react-bootstrap"
export default function TinTuc() {
    const breadcrumb = [
        {
            title: "Tin tức",
            url: "/tin-tuc",
        },
    ]
    return (
        <div>
            <Layout titlePage="Tin tức" breadcrumb={breadcrumb}>
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
