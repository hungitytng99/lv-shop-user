import React from "react"
import Layout from "src/components/layout/Layout"
import { Col, Container, Row } from "react-bootstrap"
import Link from "next/link"
export default function index() {
    const breadcrumb = [
        {
            title: "Hướng dẫn mua hàng",
            url: "/huong-dan-mua-hang",
        },
    ]
    return (
        <div>
            <Layout titlePage="Hướng dẫn mua hàng" breadcrumb={breadcrumb}>
                <Container className="huong_dan_mua_hang">
                    {/* code here */}
                    <Row>
                        <Col xs={12}>
                            <div className="guide">
                                <div className="page-title">
                                    <Link href="/huong-dan-mua-hang">
                                        <h1>Hướng dẫn</h1>
                                    </Link>
                                </div>
                                <div className="page-content">
                                    <p>
                                        <b>Bước 1:</b> Truy cập website và lựa chọn sản phẩm cần mua để mua hàng
                                    </p>
                                    <p>
                                        <b>Bước 2:</b> Click và sản phẩm muốn mua, màn hình hiển thị ra pop up với các lựa chọn sau
                                    </p>
                                    <p>Nếu bạn muốn tiếp tục mua hàng: Bấm vào phần tiếp tục mua hàng để lựa chọn thêm sản phẩm vào giỏ hàng</p>
                                    <p>Nếu bạn muốn xem giỏ hàng để cập nhật sản phẩm: Bấm vào xem giỏ hàng</p>
                                    <p>Nếu bạn muốn đặt hàng và thanh toán cho sản phẩm này vui lòng bấm vào: Đặt hàng và thanh toán</p>
                                    <p>
                                        <b>Bước 3:</b> Lựa chọn thông tin tài khoản thanh toán
                                    </p>
                                    <p>
                                        Nếu bạn đã có tài khoản vui lòng nhập thông tin tên đăng nhập là email và mật khẩu vào mục đã có tài khoản trên hệ thống
                                    </p>
                                    <p>
                                        Nếu bạn chưa có tài khoản và muốn đăng ký tài khoản vui lòng điền các thông tin cá nhân để tiếp tục đăng ký tài khoản.
                                        Khi có tài khoản bạn sẽ dễ dàng theo dõi được đơn hàng của mình
                                    </p>
                                    <p>Nếu bạn muốn mua hàng mà không cần tài khoản vui lòng nhấp chuột vào mục đặt hàng không cần tài khoản</p>
                                    <p>
                                        <b>Bước 4:</b> Điền các thông tin của bạn để nhận đơn hàng, lựa chọn hình thức thanh toán và vận chuyển cho đơn hàng của
                                        mình
                                    </p>
                                    <p>
                                        <b>Bước 5:</b> Xem lại thông tin đặt hàng, điền chú thích và gửi đơn hàng
                                    </p>
                                    <p>
                                        Sau khi nhận được đơn hàng bạn gửi chúng tôi sẽ liên hệ bằng cách gọi điện lại để xác nhận lại đơn hàng và địa chỉ của
                                        bạn.
                                    </p>
                                    Trân trọng cảm ơn.
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
