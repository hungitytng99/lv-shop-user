import Layout from "src/components/layout/Layout"
import Head from "next/head"
import { Col, Container, Row } from "react-bootstrap"
import CardProduct from "src/components-share/Card/CardProduct/CardProduct"
import CardReview from "src/components-share/Card/CardReview/CardReview"
import CarouselBannerHomePage from "src/components-share/Carousel/CarouselBannerHomePage"
import CarouselProduct from "src/components-share/Carousel/CarouselProduct"

const reviewCard = {
    imageUrl: "https://bizweb.dktcdn.net/100/367/937/themes/740363/assets/col1.jpg?1630998054887",
    urlPage: "#",
    title: "Tiện ích nhà bếp",
}
const productData = {
    urlImg: "https://bizweb.dktcdn.net/100/367/937/themes/740363/assets/col1.jpg?1630998054887",
    urlProduct: "#",
    title: "Tiện ích nhà bếp",
    curPrice: 120000,
    status: "new",
}
const productData2 = {
    urlImg: "https://bizweb.dktcdn.net/100/367/937/themes/740363/assets/col1.jpg?1630998054887",
    urlProduct: "#",
    title: "Tiện ích nhà bếp",
    curPrice: 120000,
    oldPrice: 120300,
    status: "sale",
}
const datatest = {
    quantity: 5,
    urlImg: "https://bizweb.dktcdn.net/thumb/large/100/367/937/products/2-4d4650c2-dfd4-4467-bcb4-205c692552e1.jpg?v=1615519760717",
    title: "Cửa lưới chống muỗi loại to to to",
    price: 100000,
}

export default function Home() {
    console.log("HOme")
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
