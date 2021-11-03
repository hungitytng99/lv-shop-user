import React from "react"
import Layout from "src/components/layout/Layout"
import { Container, Row, Col } from "react-bootstrap"
import CardReview from "src/components-share/Card/CardReview/CardReview"
const reviewCard = {
    imageUrl: "https://bizweb.dktcdn.net/100/367/937/themes/740363/assets/col1.jpg?1630998054887",
    urlPage: "#",
    title: "Tiện ích nhà bếp",
}
export default function SanPham(props) {
    const { children } = props
    const breadcrumb = [
        {
            title: "Tất cả sản phẩm",
            url: "/san-pham",
        },
    ]
    return (
        <div>
            <Layout titlePage="Tất cả sản phẩm" breadcrumb={breadcrumb}>
                <Container className="san_pham">
                    <Row style={{ marginTop: "30px" }}>
                        <Col lg={3} xs={6}>
                            <CardReview data={reviewCard} />
                        </Col>
                        <Col lg={3} xs={6}>
                            <CardReview data={reviewCard} />
                        </Col>
                        <Col lg={3} xs={6}>
                            <CardReview data={reviewCard} />
                        </Col>
                        <Col lg={3} xs={6}>
                            <CardReview data={reviewCard} />
                        </Col>
                    </Row>
                    <hr />
                    {children}
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
