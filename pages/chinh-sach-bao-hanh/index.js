import React from "react"
import Layout from "src/components/layout/Layout"
import { Col, Container, Row } from "react-bootstrap"
import Link from "next/link"
export default function index() {
    const breadcrumb = [
        {
            title: "Chính sách bảo hành",
            url: "/chinh-sach-bao-hanh",
        },
    ]
    return (
        <div>
            <Layout titlePage="Chính sách bảo hành" breadcrumb={breadcrumb}>
                <Container className="chinh_sach_bao_hanh">
                    {/* code here */}
                    <Row style={{ marginTop: "30px", marginBottom: "30px", paddingLeft: "10px", paddingRight: "10px" }}>
                        <Col xs={12}>
                            <div className="insurance">
                                <div className="page-title">
                                    <Link href="/chinh-sach-bao-hanh">
                                        <h1>Chính sách bảo hành</h1>
                                    </Link>
                                </div>
                                <div className="page-content">
                                    <p style={{ color: "#e74c3c" }}>
                                        <b>+ Cam kết hàng chuẩn như mô tả, hình ảnh, video .</b>
                                        <br></br>
                                        Tất cả sản phẩm mang thương hiệu <b>TIỆN ÍCH XANH</b> : được phân phối chính thức tại thị trường Việt Nam sẽ được bảo
                                        hành theo những quy định sau:
                                    </p>
                                    <p>
                                        <b>1. Phạm vi bảo hành</b>
                                    </p>
                                    <p>
                                        <b>1.1. Sản phẩm và thời hạn bảo hành</b>
                                    </p>
                                    <p>
                                        Thời hạn bảo hành sản phẩm được xác nhận dựa vào phiếu bảo hành đi kèm theo từng sản phẩm của <b>TIỆN ÍCH XANH</b> : và
                                        hóa đơn mua hàng nhưng không được vượt quá thời hạn bảo hành kể từ ngày sản xuất. Trong trường hợp Khách hàng mất phiếu
                                        bảo hành và hóa đơn mua hàng, thời hạn bảo hành kể từ ngày sản xuất sẽ được áp dụng.
                                    </p>
                                    <p>Thời gian bảo hành: Xem thông tin chi tiết sản phẩm trên website hoặc phiếu bảo hành đi kèm sản phẩm.</p>
                                    <p>
                                        <b>1.2. Điều kiện bảo hành hợp lệ</b>
                                    </p>
                                    <p>
                                        Sản phẩm sẽ được bảo hành nếu thỏa mãn đầy đủ các điều kiện sau:
                                        <br></br>
                                        <ul>
                                            <li>Sản phẩm còn trong hạn bảo hành tại thời điểm Khách hàng yêu cầu, áp dụng như mục 1.1</li>
                                            <li>Hư hỏng do chất lượng linh kiện hay lỗi kỹ thuật trong quá trình sản xuất.</li>
                                            <li>Sản phẩm phải còn nguyên dạng, nhãn sản phẩm, số sê ri (S/N)</li>
                                            <li>Sản phẩm không thuộc trường hợp bị từ chối bảo hành quy định tại điều 1.3</li>
                                        </ul>
                                    </p>
                                    <p>
                                        <b>1.3. Trường hợp từ chối bảo hành</b>
                                    </p>
                                    <p>
                                        Sản phẩm thuộc một trong những trường hợp sau sẽ bị mất quyền bảo hành:
                                        <ul>
                                            <li> Sản phẩm bị hư hại do thiên tai, hỏa hoạn, lụt lội, sét đánh…</li>
                                            <li> Sản phẩm bị đặt tại nơi bụi bẩn, ẩm ướt;</li>
                                            <li> Sản phẩm bị biến dạng do tác động nhiệt, tác động lực bên ngoài;</li>
                                            <li> Sản phẩm có vết mốc, rỉ sét hoặc bị ăn mòn, oxy hóa bởi hóa chất;</li>
                                            <li> Sản phẩm bị hư hỏng do dùng sai điện thế và dòng điện chỉ định;</li>
                                            <li> Sản phẩm lắp đặt, bảo trì, sử dụng không đúng theo hướng dẫn của Elmich nên gây ra hư hỏng;</li>
                                            <li>
                                                {" "}
                                                Sản phẩm đã từng bị thay đổi, sửa chữa nhưng không được thực hiện bởi các Trung tâm Bảo hành của{" "}
                                                <b>TIỆN ÍCH XANH</b> :
                                            </li>
                                            <li> Không bảo hành các phụ kiện kèm theo: dây cáp, dây nối, gioăng …;</li>
                                            <li> Không bảo hành các chi tiết hao mòn: lưỡi dao, nhông truyền, bóng đèn, chi tiết thủy tinh, khớp nối…;</li>
                                            <li> Sản phẩm hết hạn bảo hành.</li>
                                        </ul>
                                    </p>
                                    <p>
                                        <b>
                                            2. Các dịch vụ của Công ty Cổ phần <b>TIỆN ÍCH XANH</b> :
                                        </b>
                                    </p>
                                    <p>
                                        <b>
                                            2.1. Trung tâm Chăm sóc Khách hàng của <b>TIỆN ÍCH XANH</b> :
                                        </b>
                                    </p>
                                    <p>
                                        Tổng đài Chăm sóc Khách hàng trên toàn quốc : <b>0326.330.338</b>
                                    </p>
                                    <p>
                                        Khách hàng có thể liên lạc đến số điện thoại này để được giải đáp về: thông tin sản phẩm, thông tin linh kiện, thông tin
                                        khuyến mại, thông tin dịch vụ, điều kiện, thủ tục, địa điểm bảo hành được cập nhật mới nhất.
                                    </p>
                                    <p>
                                        <b>2.2. Các dịch vụ bảo hành cơ bản</b>
                                    </p>
                                    <p>&nbsp; &nbsp; &nbsp; &nbsp;- Dịch vụ sửa chữa bảo hành</p>
                                    <p>
                                        Khi sản phẩm phát sinh hư hỏng, Khách hàng có thể mang sản phẩm đến trực tiếp Trung Tâm Bảo hành <b>TIỆN ÍCH XANH</b> để
                                        yêu cầu dịch vụ bảo hành. Đồng thời Khách hàng sẽ được trung tâm yêu cầu cung cấp thông tin, bao gồm:
                                        <br></br>
                                        &nbsp;&nbsp;√ Thông tin sản phẩm: Kiểu máy, số máy, ngày mua sản phẩm...
                                        <br></br>
                                        &nbsp;&nbsp;√ Thông tin Khách hàng: Tên Khách hàng, số điện thoại liên hệ, địa chỉ liên lạc và nội dung yêu cầu dịch vụ
                                        sửa chữa.
                                    </p>
                                    <p>
                                        &nbsp; &nbsp; &nbsp; &nbsp;- <b>Dịch vụ sửa chữa ngoài bảo hành</b>
                                    </p>
                                    <p>
                                        Trong trường hợp Khách hàng có nhu cầu yêu cầu dịch vụ sửa chữa ngoài bảo hành, các Trung tâm Bảo hành của{" "}
                                        <b>TIỆN ÍCH XANH</b>
                                        có trách nhiệm phục vụ và sửa chữa sản phẩm tận tình và chu đáo. Khách hàng sẽ thanh toán các chi phí phát sinh cho việc
                                        sửa chữa như linh kiện thay thế, tiền công và chi phí khác (nếu có) dựa theo thỏa thuận giữa 2 bên.
                                    </p>
                                    <p>
                                        Linh kiện thay thế được bảo hành một (01) tháng kể từ ngày sửa chữa thay thế bởi Trung tâm Bảo hành của{" "}
                                        <b>TIỆN ÍCH XANH</b>
                                        trên toàn quốc.
                                    </p>

                                    <p>
                                        <b>3. Thời gian nhận bảo hành</b>
                                    </p>

                                    <p>
                                        - Trong giờ hành chính.
                                        <br></br>
                                        8h – 17h: từ thứ 2 đến thứ 6.
                                        <br></br>
                                        8h – 12h: ngày thứ 7<br></br>- Chủ nhật/Ngày lễ: nghỉ.
                                    </p>
                                    <p>
                                        <b>4. Địa điểm bảo hành</b>
                                    </p>
                                    <p>
                                        Địa chỉ các Trung tâm Bảo hành trên toàn quốc của <b>TIỆN ÍCH XANH</b> được in trên phiếu bảo hành kèm theo sản phẩm
                                        hoặc trên website: https://dienmaycuongthuy.vn/
                                    </p>
                                    <p>
                                        <b>Lưu ý:</b>
                                    </p>
                                    <p>
                                        Trung tâm Bảo hành của <b>TIỆN ÍCH XANH</b> đều có phiếu tiếp nhận bảo hành khi tiếp nhận sản phẩm bảo hành của Khách
                                        hàng (bao gồm thông tin Khách hàng và sản phẩm, thông tin tình trạng sản phẩm, thời gian hoàn tất bảo hành...).
                                        <br></br>
                                        Vui lòng liên hệ lại trực tiếp với Trung tâm Bảo hành hoặc liên hệ với Công ty Cổ phần <b>TIỆN ÍCH XANH</b> theo số tổng
                                        đài chăm sóc Khách hàng <b>0326.330.338</b> để được hỗ trợ.
                                        <br></br>
                                    </p>
                                    <p>
                                        <b>Trân trọng !</b>
                                    </p>
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
