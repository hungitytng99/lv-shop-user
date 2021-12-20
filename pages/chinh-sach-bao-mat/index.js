import React from "react";
import Layout from "src/components/layout/Layout";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
export default function index() {
    const breadcrumb = [
        {
            title: "Chính sách bảo mật",
            url: "/chinh-sach-bao-mat",
        },
    ];
    return (
        <div>
            <Layout titlePage="Chính sách bảo mật" breadcrumb={breadcrumb}>
                <Container className="chinh_sach_bao_mat">
                    {/* code here */}
                    <Row style={{ marginTop: "30px", marginBottom: "30px", paddingLeft: "10px", paddingRight: "10px" }}>
                        <Col xs={12}>
                            <div className="security">
                                <div className="page-title">
                                    <Link href="/chinh-sach-bao-mat">
                                        <h1>Chính sách</h1>
                                    </Link>
                                </div>
                                <div className="page-content">
                                    <p>
                                        <b>1. Mục đích và phạm vi thu thập thông tin:</b>
                                    </p>
                                    <p>
                                        Để truy cập và sử dụng một số dịch vụ tại website, bạn có thể sẽ được yêu cầu đăng ký với chúng tôi thông tin cá nhân (Email, Họ tên, Số ĐT
                                        liên lạc…). Mọi thông tin khai báo phải đảm bảo tính chính xác và hợp pháp. Chúng tôi không chịu mọi trách nhiệm liên quan đến pháp luật của
                                        thông tin khai báo.
                                    </p>
                                    <p>
                                        Chúng tôi thu thập và sử dụng thông tin cá nhân bạn với mục đích phù hợp và hoàn toàn tuân thủ nội dung của "Chính sách bảo mật" này. Khi
                                        cần thiết, chúng tôi có thể sử dụng những thông tin này để liên hệ trực tiếp với bạn dưới các hình thức như: Gởi thư ngỏ, đơn đặt hàng, thư
                                        cảm ơn, thông tin về kỹ thuật và bảo mật...
                                    </p>
                                    <p>
                                        Trong một số trường hợp, chúng tôi có thể thuê một đơn vị độc lập để tiến hành các dự án nghiên cứu thị trường và khi đó thông tin của bạn
                                        sẽ được cung cấp cho đơn vị này để tiến hành dự án. Bên thứ ba này sẽ bị ràng buộc bởi một thỏa thuận về bảo mật mà theo đó họ chỉ được phép
                                        sử dụng những thông tin được cung cấp cho mục đích hoàn thành dự án.
                                    </p>
                                    <p>
                                        <b>2. Phạm vi sử dụng thông tin:</b>
                                    </p>
                                    <p>
                                        - Website thu thập và sử dụng thông tin cá nhân quý khách với mục đích phù hợp và hoàn toàn tuân thủ nội dung của “Chính sách bảo mật” này.
                                    </p>
                                    <p>
                                        - Khi cần thiết, chúng tôi có thể sử dụng những thông tin này để liên hệ trực tiếp với bạn dưới các hình thức như: gởi thư ngỏ, đơn đặt
                                        hàng, thư cảm ơn, thông tin về kỹ thuật và bảo mật, quý khách có thể nhận được thư định kỳ cung cấp thông tin sản phẩm, dịch vụ mới, thông
                                        tin về các sự kiện sắp tới hoặc thông tin tuyển dụng nếu quý khách đăng kí nhận email thông báo.
                                    </p>
                                    <p>
                                        <b>3. Thời gian lưu trữ thông tin:</b>
                                    </p>
                                    <p>
                                        Ngoại trừ các trường hợp về sử dụng thông tin cá nhân như đã nêu trong chính sách này, chúng tôi cam kết sẽ không tiết lộ thông tin cá nhân
                                        bạn ra ngoài.
                                    </p>
                                    <p>Thông tin sẽ được lưu trữ vĩnh viễn cho đến kh quý khách không sử dụng dịch vụ của chúng tôi nữa.</p>
                                    <p>
                                        <b>4. Địa chỉ của đơn vị thu thập và quản lý thông tin cá nhân</b>
                                    </p>
                                    <p>
                                        CÔNG TY THHH Tiện ích HT.
                                        <br></br>
                                        Địa chỉ: xóm 30, xã Giao Thiện, huyện Giao Thủy, tỉnh Nam Định.
                                    </p>

                                    <p>
                                        <b>5. Phương tiện và công cụ để người dùng tiếp cận và chỉnh sửa dữ liệu cá nhân của mình</b>
                                    </p>
                                    <p>
                                        Bất cứ thời điểm nào bạn cũng có thể truy cập và chỉnh sửa những thông tin cá nhân của mình theo các links thích hợp mà chúng tôi cung cấp.
                                    </p>
                                    <p>
                                        <b>6. Cam kết bảo mật thông tin cá nhân khách hàng:</b>
                                    </p>
                                    <p>
                                        Chúng tôi cam kết bảo mật thông tin cá nhân của bạn bằng mọi cách thức có thể. Chúng tôi sẽ sử dụng nhiều công nghệ bảo mật thông tin khác
                                        nhau nhằm bảo vệ thông tin này không bị truy lục, sử dụng hoặc tiết lộ ngoài ý muốn.
                                    </p>
                                    <p>
                                        Chúng tôi khuyến cáo bạn nên bảo mật các thông tin liên quan đến mật khẩu truy xuất của bạn và không nên chia sẻ với bất kỳ người nào khác.
                                        Nếu sử dụng máy tính chung nhiều người, bạn nên đăng xuất, hoặc thoát hết tất cả cửa sổ Website đang mở.
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
