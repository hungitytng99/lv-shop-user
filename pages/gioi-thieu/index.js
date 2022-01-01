import React from "react";
import Layout from "src/components/layout/Layout";
import { Container } from "react-bootstrap";
import Link from "next/link";
export default function GioiThieu() {
    const breadcrumb = [
        {
            title: "Giới thiệu",
            url: "/gioi-thieu",
        },
    ];
    return (
        <div>
            <Layout titlePage="Giới thiệu" breadcrumb={breadcrumb}>
                <Container className="gioi_thieu">
                    <div className="page-title">
                        <Link href="/gioi-thieu">
                            <h1>Giới thiệu</h1>
                        </Link>
                        <span>Xin mời nhập lời giới thiệu tại đây.</span>
                    </div>
                </Container>
            </Layout>
        </div>
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
