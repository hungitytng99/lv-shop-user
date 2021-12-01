import React from "react"
import Layout from "src/components/layout/Layout"
import { Col, Container, Row } from "react-bootstrap"
import Link from "next/link"
export default function index() {
    const breadcrumb = [
        {
            title: "Chính sách vận chuyển",
            url: "/chinh-sach-van-chuyen",
        },
    ]
    return (
        <div>
            <Layout titlePage="Chính sách vận chuyển" breadcrumb={breadcrumb}>
                <Container className="chinh_sach_van_chuyen">
                    {/* code here */}
                    <Row>
                        <Col xs={12}>
                            <div className="delivery">
                                <div className="page-title">
                                    <Link href="/chinh-sach-van-chuyen">
                                        <h1>Chính sách vận chuyển</h1>
                                    </Link>
                                </div>
                                <div className="page-content">
                                    <p>
                                        <b>Chính sách vận chuyển :</b>
                                    </p>
                                    <p style={{ textDecoration: "underline" }}>Quy trình giao nhận vận chuyển : </p>
                                    <p>
                                        +{" "}
                                        <span style={{ color: "#2980b9" }}>
                                            <b>TIỆN ÍCH XANH</b>
                                        </span>{" "}
                                        thực hiện giao hàng trên toàn quốc theo bảng phí vận chuyển<br></br>
                                        Khi quý khách hàng đặt hàng thành công qua website,{" "}
                                        <span style={{ color: "#2980b9" }}>
                                            <b>TIỆN ÍCH XANH</b>
                                        </span>{" "}
                                        sẽ tiến hành giao hàng theo yêu cầu của quý khách hàng:
                                    </p>
                                    <p>
                                        + Giao hàng tận nơi dự kiến 2 - 3 ngày làm việc tại Nội thành Hà Nội và thành phố Hồ Chí Minh.<br></br>
                                        Từ 3 - 5 ngày cho các tỉnh thành khác trên cả nước.
                                    </p>
                                    <p>
                                        + Trong trường hợp đơn đặt hàng phát sinh chậm trễ trong việc giao hàng hoăc cung ứng dịch vụ,{" "}
                                        <span style={{ color: "#2980b9" }}>
                                            <b>TIỆN ÍCH XANH</b>
                                        </span>{" "}
                                        sẽ liên hệ trực tiếp khách hàng để nắm thông tin và xử lý.
                                    </p>
                                    <p>
                                        +{" "}
                                        <span style={{ color: "#2980b9" }}>
                                            <b>TIỆN ÍCH XANH</b>
                                        </span>{" "}
                                        liên kết với đơn vị vận chuyển Giao hàng nhanh ( GHN) nhằm cung cấp cho gian hàng dịch vụ vận chuyển, giao hàng thu tiền
                                        tin cậy và hiệu quả nhất.
                                    </p>
                                    <p>
                                        + Các đơn hàng vận chuyển mà gian hàng xác nhận vận chuyển qua hệ thống của{" "}
                                        <span style={{ color: "#2980b9" }}>
                                            <b>TIỆN ÍCH XANH</b>
                                        </span>{" "}
                                        sẽ được chuyển tới hãng vận chuyển để xử lý, lấy hàng, giao hàng:
                                    </p>
                                    <p>+ Giao hàng toàn quốc, nhận hàng, kiểm hàng mới thanh toán.</p>
                                    <p>+ Phí giao hàng nội thành Hà Nội 25K, toàn quốc 30K. Các đơn từ 300K trở lên miễn ship.</p>
                                </div>
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
