import React from "react";
import Layout from "src/components/layout/Layout";
import { Col, Container, Row } from "react-bootstrap";
import UserInforCard from "src/components/pages/tai-khoan/UserInforCard";
import ListAddress from "src/components/pages/tai-khoan/ListAddress";
import HistoryOrders from "src/components/pages/tai-khoan/HistoryOrders";
import Head from "next/head";

export default function index() {
    const breadcrumb = [
        {
            title: "Thông tin tài khoản",
            url: "/tai-khoan",
        },
    ];
    return (
        <>
            <Head>
                <title>{breadcrumb[0].title}</title>
            </Head>
            <Layout titlePage={breadcrumb[0].title} breadcrumb={breadcrumb}>
                <Container className="account">
                    <Row>
                        <Col lg={3}>
                            <UserInforCard />
                        </Col>
                        <Col lg={9}>
                            <ListAddress />
                        </Col>
                    </Row>
                    <div style={{ marginTop: "60px" }}>
                        <HistoryOrders />
                    </div>
                </Container>
            </Layout>
        </>
    );
}
export async function getServerSideProps() {
    try {
        return {
            props: {},
        };
    } catch (error) {
        return {
            notFound: true,
        };
    }
}
