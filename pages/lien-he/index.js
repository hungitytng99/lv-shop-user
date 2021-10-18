import React from "react"
import Layout from "src/components/layout/Layout"
import { Container } from "react-bootstrap"
export default function LienHe() {
    const breadcrumb = [
        {
            title: "Liên Hệ",
            url: "/lien-he",
        },
    ]
    return (
        <div>
            <Layout titlePage="Liên Hệ" breadcrumb={breadcrumb}>
                <Container>Liên hệ</Container>
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
