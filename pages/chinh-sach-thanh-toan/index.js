import React from "react";
import Layout from "src/components/layout/Layout";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
export default function index() {
    const breadcrumb = [
        {
            title: "Chính sách thanh toán",
            url: "/chinh-sach-thanh-toan",
        },
    ];
    return (
        <div>
            <Layout titlePage="Chính sách thanh toán" breadcrumb={breadcrumb}>
                <Container className="chinh_sach_thanh_toan">
                    {/* code here */}
                    <Row>
                        <Col xs={12}>
                            <div className="payment">
                                <div className="page-title">
                                    <Link href="/chinh-sach-thanh-toan">
                                        <h1>Chính sách thanh toán</h1>
                                    </Link>
                                </div>
                                <div className="page-content">
                                    <p>
                                        <b>Chính sách thanh toán :</b>
                                    </p>
                                    <ol type="I">
                                        <div>
                                            <li>
                                                Quy trình thanh toán của{" "}
                                                <b style={{ color: "#2980b9" }}>
                                                    <b style={{ color: "#2980b9" }}>TIỆN ÍCH XANH</b>
                                                </b>{" "}
                                                :
                                            </li>
                                            <p>
                                                Người mua và bên bán có thể tham khảo các phương thức thanh toán sau đây và lựa chọn áp dụng phương thức phù hợp
                                            </p>
                                            <p style={{ textDecoration: "underline" }}>Cách 1: Thanh toán khi nhận hàng (COD):</p>
                                            <div>
                                                <ul>
                                                    <li>Bước 1: Người mua tìm hiểu thông tin về sản phẩm, dịch vụ được đăng tin.</li>
                                                    <li> Bước 2: Người mua điền đầy đủ các thông tin theo hướng dẫn mua hàng</li>
                                                    <li> Bước 3: Tại phần “Phương thức thanh toán”, người mua lựa chọn hình thức “Thanh toán khi nhận hàng”</li>
                                                    <li> Bước 4: Người mua thực hiện tiếp các bước trong quy trình đặt hàng</li>
                                                    <li> Bước 5: Người bán chuyển hàng.</li>
                                                    <li> Bước 6: Người mua nhận hàng và thanh toán bằng tiền mặt cho nhân viên giao hàng.</li>
                                                </ul>
                                            </div>
                                            <p style={{ textDecoration: "underline" }}>Cách 2: Thanh toán qua ngân hàng trực tuyến (Chuyển khoản):</p>
                                            <div>
                                                <ul>
                                                    <li> Bước 1: Người mua tìm hiểu thông tin về sản phẩm, dịch vụ được đăng tin.</li>
                                                    <li> Bước 2: Người mua điền đầy đủ các thông tin theo hướng dẫn mua hàng</li>
                                                    <li>
                                                        {" "}
                                                        Bước 3: Tại phần “Phương thức thanh toán”, người mua lựa chọn hình thức “Ngân hàng trực tuyến (Chuyển
                                                        khoản)” và thực hiện theo hướng dẫn
                                                    </li>
                                                    <li> Bước 4: Người mua thực hiện tiếp các bước trong quy trình đặt hàng</li>
                                                    <li> Bước 5: Người bán chuyển hàng.</li>
                                                    <li> Bước 6: Người mua kiểm tra và nhận hàng.</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div>
                                            <li>Đảm bảo an toàn giao dịch</li>
                                            <p>
                                                <b style={{ color: "#2980b9" }}>TIỆN ÍCH XANH</b> đã sử dụng các dịch vụ để bảo vệ thông tin về nội dung mà
                                                người bán đăng sản phẩm trên Tienichxanh.com.vn. Để đảm bảo các giao dịch được tiến hành thành công, hạn chế tối
                                                đa rủi ro có thể phát sinh.
                                            </p>
                                            <p>
                                                Người mua nên cung cấp thông tin đầy đủ (tên, địa chỉ, số điện thoại, email) khi tham gia mua hàng của{" "}
                                                <b style={{ color: "#2980b9" }}>TIỆN ÍCH XANH</b> để <b style={{ color: "#2980b9" }}>TIỆN ÍCH XANH</b> có thể
                                                liên hệ nhanh lại với người mua trong trường hợp xảy ra lỗi.
                                            </p>
                                            <p>
                                                Trong trường hợp giao dịch nhận hàng tại nhà của người mua, thì người mua chỉ nên thanh toán sau khi đã kiểm tra
                                                hàng hoá chi tiết và hài lòng với sản phẩm.
                                            </p>
                                            <p>
                                                Khi thanh toán trực tuyến bằng thẻ ATM nội địa, Visa, Master người mua nên tự mình thực hiện và không được để lộ
                                                thông tin thẻ. <b style={{ color: "#2980b9" }}>TIỆN ÍCH XANH</b> không lưu trữ thông tin thẻ của người mua sau
                                                khi thanh toán, mà thông qua hệ thống của ngân hàng liên kết. Nên tuyệt đối bảo mật thông tin thẻ cho khách
                                                hàng.
                                            </p>
                                            <p>
                                                Trong trường lỗi xảy ra trong quá trình thanh toán trực tuyến, <b style={{ color: "#2980b9" }}>TIỆN ÍCH XANH</b>{" "}
                                                sẽ là đơn vị giải quyết cho khách hàng trong vòng 1 ngày làm việc từ khi tiếp nhận thông tin từ người thực hiện
                                                giao dịch.
                                            </p>
                                        </div>
                                    </ol>
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
