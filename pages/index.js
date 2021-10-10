import Layout from "components/layout/Layout"
import Head from "next/head"
import { Col, Container, Row } from "react-bootstrap"
import CardProduct from "./../src/components-share/Card/CardProduct/CardProduct"
import CardReview from "./../src/components-share/Card/CardReview/CardReview"
import CarouselBannerHomePage from "./../src/components-share/Carousel/CarouselBannerHomePage"
import CarouselProduct from "./../src/components-share/Carousel/CarouselProduct"
const reviewCard = {
    imageUrl: "https://bizweb.dktcdn.net/100/367/937/themes/740363/assets/col1.jpg?1630998054887",
    urlPage: "#",
    title: "Tiện ích nhà bếp",
}
const productData = {
    urlImg: "https://bizweb.dktcdn.net/100/367/937/themes/740363/assets/col1.jpg?1630998054887",
    urlProduct: "#",
    title: "Tiện ích nhà bếp",
    curPrice: "120000đ",
    status: "new",
}
const productData2 = {
    urlImg: "https://bizweb.dktcdn.net/100/367/937/themes/740363/assets/col1.jpg?1630998054887",
    urlProduct: "#",
    title: "Tiện ích nhà bếp",
    curPrice: "120000đ",
    oldPrice: "120300đ",
    status: "sale",
}

export default function Home() {
    return (
        <>
            <Head>
                <title>Trang chủ</title>
            </Head>
            <Layout>
                <CarouselBannerHomePage />
                <Container className="home">
                    <Row>
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
                    <div className="box_title">
                        <h4>Hot Sale Mỗi Ngày</h4>
                        <p>Sản phẩm với giá cực kỳ hấp dẫn</p>
                    </div>
                    <div>
                        <CarouselProduct>
                            <CardProduct data={productData} />
                            <CardProduct data={productData2} />
                            <CardProduct data={productData} />
                            <CardProduct data={productData2} />
                            <CardProduct data={productData2} />
                            <CardProduct data={productData} />
                            <CardProduct data={productData2} />
                            <CardProduct data={productData} />
                            <CardProduct data={productData} />
                            <CardProduct data={productData2} />
                        </CarouselProduct>
                    </div>
                    <div className="box_title">
                        <h4>Sản Phẩm Mới</h4>
                        <p>Cập nhật sản phẩm mới nhất</p>
                    </div>
                    <div></div>
                    <div className="box_title">
                        <h4>Tiện ích phòng tắm {"&"} WC</h4>
                        <p>Cập nhật sản phẩm mới nhất</p>
                    </div>
                    <div className="box_title">
                        <h4>Tin tức {"&"} kiến thức</h4>
                    </div>
                </Container>
            </Layout>
        </>
    )
}
