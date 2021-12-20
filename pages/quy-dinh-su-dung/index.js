import React from "react"
import Layout from "src/components/layout/Layout"
import { Col, Container, Row } from "react-bootstrap"
import Link from "next/link"
export default function index() {
    const breadcrumb = [
        {
            title: "Quy định sử dụng",
            url: "/quy-dinh-su-dung",
        },
    ]
    return (
        <div>
            <Layout titlePage="Quy định sử dụng" breadcrumb={breadcrumb}>
                <Container className="quy_dinh_su_dung">
                    {/* code here */}
                    <Row>
                        <Col xs={12}>
                            <div className="usage">
                                <div className="page-title">
                                    <Link href="/quy-dinh-su-dung">
                                        <h1>Điều khoản</h1>
                                    </Link>
                                </div>
                                <div className="page-content">
                                    <p>
                                        Khi quý khách truy cập vào trang web của chúng tôi có nghĩa là quý khách đồng ý với các điều khoản này. Trang web có
                                        quyền thay đổi, chỉnh sửa, thêm hoặc lược bỏ bất kỳ phần nào trong Quy định và Điều kiện sử dụng, vào bất cứ lúc nào.
                                        Các thay đổi có hiệu lực ngay khi được đăng trên trang web mà không cần thông báo trước. Và khi quý khách tiếp tục sử
                                        dụng trang web, sau khi các thay đổi về quy định và điều kiện được đăng tải, có nghĩa là quý khách chấp nhận với những
                                        thay đổi đó.
                                    </p>
                                    <p>Quý khách vui lòng kiểm tra thường xuyên để cập nhật những thay đổi của chúng tôi.</p>
                                    <ol>
                                        <li>
                                            Hướng dẫn sử dụng web
                                            <ul>
                                                <li>
                                                    Khi vào web của chúng tôi, người dùng tối thiểu phải 18 tuổi hoặc truy cập dưới sự giám sát của cha mẹ hay
                                                    người giám hộ hợp pháp.
                                                </li>

                                                <li>
                                                    Chúng tôi cấp giấy phép sử dụng để bạn có thể mua sắm trên web trong khuôn khổ điều khoản và điều kiện sử
                                                    dụng đã đề ra.
                                                </li>

                                                <li>
                                                    Nghiêm cấm sử dụng bất kỳ phần nào của trang web này với mục đích thương mại hoặc nhân danh bất kỳ đối tác
                                                    thứ ba nào nếu không được chúng tôi cho phép bằng văn bản. Nếu vi phạm bất cứ điều nào trong đây, chúng tôi
                                                    sẽ hủy giấy phép của bạn mà không cần báo trước.
                                                </li>

                                                <li>
                                                    Trang web này chỉ dùng để cung cấp thông tin sản phẩm chứ chúng tôi không phải nhà sản xuất nên những nhận
                                                    xét hiển thị trên web là ý kiến cá nhân của khách hàng, không phải của chúng tôi.
                                                </li>

                                                <li>
                                                    Quý khách phải đăng ký tài khoản với thông tin xác thực về bản thân và phải cập nhật nếu có bất kỳ thay đổi
                                                    nào. Mỗi người truy cập phải có trách nhiệm với mật khẩu, tài khoản và hoạt động của mình trên web. Hơn nữa,
                                                    quý khách phải thông báo cho chúng tôi biết khi tài khoản bị truy cập trái phép. Chúng tôi không chịu bất kỳ
                                                    trách nhiệm nào, dù trực tiếp hay gián tiếp, đối với những thiệt hại hoặc mất mát gây ra do quý khách không
                                                    tuân thủ quy định.
                                                </li>

                                                <li>
                                                    Trong suốt quá trình đăng ký, quý khách đồng ý nhận email quảng cáo từ website. Sau đó, nếu không muốn tiếp
                                                    tục nhận mail, quý khách có thể từ chối bằng cách nhấp vào đường link ở dưới cùng trong mọi email quảng cáo.
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            Chấp nhận đơn hàng và giá cả
                                            <ul>
                                                <li>
                                                    Chúng tôi có quyền từ chối hoặc hủy đơn hàng của quý khách vì bất kỳ lý do gì vào bất kỳ lúc nào. Chúng tôi
                                                    có thể hỏi thêm về số điện thoại và địa chỉ trước khi nhận đơn hàng.
                                                </li>

                                                <li>
                                                    Chúng tôi cam kết sẽ cung cấp thông tin giá cả chính xác nhất cho người tiêu dùng. Tuy nhiên, đôi lúc vẫn có
                                                    sai sót xảy ra, ví dụ như trường hợp giá sản phẩm không hiển thị chính xác trên trang web hoặc sai giá, tùy
                                                    theo từng trường hợp chúng tôi sẽ liên hệ hướng dẫn hoặc thông báo hủy đơn hàng đó cho quý khách. Chúng tôi
                                                    cũng có quyền từ chối hoặc hủy bỏ bất kỳ đơn hàng nào dù đơn hàng đó đã hay chưa được xác nhận hoặc đã bị
                                                    thanh toán.
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            Thương hiệu và bản quyền
                                            <ul>
                                                <li>
                                                    Mọi quyền sở hữu trí tuệ (đã đăng ký hoặc chưa đăng ký), nội dung thông tin và tất cả các thiết kế, văn bản,
                                                    đồ họa, phần mềm, hình ảnh, video, âm nhạc, âm thanh, biên dịch phần mềm, mã nguồn và phần mềm cơ bản đều là
                                                    tài sản của chúng tôi. Toàn bộ nội dung của trang web được bảo vệ bởi luật bản quyền của Việt Nam và các
                                                    công ước quốc tế. Bản quyền đã được bảo lưu.
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            Quyền pháp lý
                                            <ul>
                                                <li>
                                                    Các điều kiện, điều khoản và nội dung của trang web này được điều chỉnh bởi luật pháp Việt Nam và Tòa án có
                                                    thẩm quyền tại Việt Nam sẽ giải quyết bất kỳ tranh chấp nào phát sinh từ việc sử dụng trái phép trang web
                                                    này.
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            Quy định về bảo mật
                                            <ul>
                                                <li>
                                                    Trang web của chúng tôi coi trọng việc bảo mật thông tin và sử dụng các biện pháp tốt nhất bảo vệ thông tin
                                                    và việc thanh toán của quý khách. Thông tin của quý khách trong quá trình thanh toán sẽ được mã hóa để đảm
                                                    bảo an toàn. Sau khi quý khách hoàn thành quá trình đặt hàng, quý khách sẽ thoát khỏi chế độ an toàn.
                                                </li>

                                                <li>
                                                    Quý khách không được sử dụng bất kỳ chương trình, công cụ hay hình thức nào khác để can thiệp vào hệ thống
                                                    hay làm thay đổi cấu trúc dữ liệu. Trang web cũng nghiêm cấm việc phát tán, truyền bá hay cổ vũ cho bất kỳ
                                                    hoạt động nào nhằm can thiệp, phá hoại hay xâm nhập vào dữ liệu của hệ thống. Cá nhân hay tổ chức vi phạm sẽ
                                                    bị tước bỏ mọi quyền lợi cũng như sẽ bị truy tố trước pháp luật nếu cần thiết.
                                                </li>

                                                <li>
                                                    Mọi thông tin giao dịch sẽ được bảo mật nhưng trong trường hợp cơ quan pháp luật yêu cầu, chúng tôi sẽ buộc
                                                    phải cung cấp những thông tin này cho các cơ quan pháp luật.
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            Thay đổi, hủy bỏ giao dịch tại website
                                            <ul>
                                                Trong mọi trường hợp, khách hàng đều có quyền chấm dứt giao dịch nếu đã thực hiện các biện pháp sau đây:
                                                <li>Thông báo cho chúng tôi về việc hủy giao dịch qua đường dây nóng 0979121006</li>
                                                <li>
                                                    Trả lại hàng hoá đã nhận nhưng chưa sử dụng hoặc hưởng bất kỳ lợi ích nào từ hàng hóa đó (theo quy định của
                                                    chính sách đổi trả hàng).
                                                </li>
                                            </ul>
                                        </li>
                                    </ol>
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
