import React from "react"
import Layout from "src/components/layout/Layout"
import { Col, Container, Row } from "react-bootstrap"
import Link from "next/link"
export default function index() {
    const breadcrumb = [
        {
            title: "Chính sách đổi trả",
            url: "/chinh-sach-doi-tra",
        },
    ]
    return (
        <div>
            <Layout titlePage="Chính sách đổi trả" breadcrumb={breadcrumb}>
                <Container>
                    {/* code here */}
                    <Row>
                        <Col xs={12}>
                            <div className="Delivery">
                                <div className="page-title">
                                    <Link href="/chinh-sach-doi-tra">
                                        <h1>Chính sách đổi trả</h1>
                                    </Link>
                                </div>
                                <div className="page-content"></div>
                            </div>
                        </Col>
                    </Row>
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
