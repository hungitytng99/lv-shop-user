import React from "react"
import Layout from "src/components/layout/Layout"
import { Col, Container, Row } from "react-bootstrap"
import UserInforCard from "src/components/pages/tai-khoan/UserInforCard"
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
                <Container className="account">
                    <Row>
                        <Col lg={8}></Col>
                        <Col lg={4}>
                            <UserInforCard />
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
