import React from "react";
import Layout from "src/components/layout/Layout";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
export default function index() {
    const breadcrumb = [
        {
            title: "Chính sách đổi trả",
            url: "/chinh-sach-doi-tra",
        },
    ];
    return (
        <div>
            <Layout titlePage="Chính sách đổi trả" breadcrumb={breadcrumb}>
                <Container className="chinh_sach_doi_tra">
                    {/* code here */}
                    <Row>
                        <Col xs={12}>
                            <div className="return">
                                <div className="page-title">
                                    <Link href="/chinh-sach-doi-tra">
                                        <h1>Chính sách đổi trả</h1>
                                    </Link>
                                </div>
                                <div className="page-content">
                                    <p>
                                        <b>
                                            Quý khách hàng có thể gửi yêu cầu đổi trả sản phẩm tới địa điểm mua hàng với các trường hợp và thời gian cụ thể sau:
                                        </b>
                                    </p>
                                    <ol>
                                        <li>
                                            Hàng hóa bị biến dạng, hỏng hóc do quá trình vận chuyển theo chính sách mua hàng của{" "}
                                            <b style={{ color: "#2980b9" }}>TIỆN ÍCH XANH</b>. Tại thời điểm nhận hàng, quý khách hàng vui lòng kiểm tra sản
                                            phẩm và yêu cầu trả lại nếu phát hiện lỗi hoặc không đúng sản phẩm đặt hàng.
                                        </li>
                                        <li>Sản phẩm bị hỏng hóc, biến dạng do lỗi sản xuất và chưa qua sử dụng.</li>
                                        <li>Cam kết đổi trả được quy định riêng đối với từng sản phẩm cụ thể.</li>
                                    </ol>
                                    <p style={{ fontStyle: "italic" }}>
                                        * Lưu ý: Sản phẩm yêu cầu đổi trả phải còn nguyên tem nguyên mác và trong thời gian còn bảo hành
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
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
