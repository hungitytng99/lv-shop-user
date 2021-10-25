import React from "react"
import Layout from "src/components/layout/Layout"
import { Container } from "react-bootstrap"
export default function index() {
    const breadcrumb = [
        {
            title: "Chính sách bảo mật",
            url: "/chinh-sach-bao-mat",
        },
    ]
    return (
        <div>
            <Layout titlePage="Chính sách bảo mật" breadcrumb={breadcrumb}>
                <Container>
                    {/* code here */}
                    Chính sách bảo mật
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
