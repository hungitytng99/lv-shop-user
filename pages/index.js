import Layout from "src/components/layout/Layout";
import Head from "next/head";
import { Col, Container, Row } from "react-bootstrap";
import CardProduct from "src/components-share/Card/CardProduct/CardProduct";
import CardReview from "src/components-share/Card/CardReview/CardReview";
import CarouselProduct from "src/components-share/Carousel/CarouselProduct";
import CarouselBannerHomePage from "src/components/pages/home/CarouselBannerHomePage";
import { productData, productData2 } from "src/constants/dataTest";
import { useSelector } from "react-redux";
import { getListRandomNumber } from "./../src/share_function/index";

const reviewCard = {
    imageUrl: "https://bizweb.dktcdn.net/100/367/937/themes/740363/assets/col1.jpg?1630998054887",
    urlPage: "#",
    title: "Tiện ích nhà bếp",
};

export default function Home() {
    const menu = useSelector((stores) => stores.menuSlice.value);
    const randomCardReview = getListRandomNumber(4, menu.data?.length || 0);
    return (
        <>
            <Head>
                <title>Trang chủ</title>
            </Head>
            <Layout>
                <CarouselBannerHomePage />
                <Container className="home">
                    <Row>
                        {randomCardReview.map((item, index) => {
                            return (
                                <Col key={menu.data[item].urlPage + "review"} lg={3} xs={6}>
                                    <CardReview data={menu.data[item]} />
                                </Col>
                            );
                        })}
                        {/* <Col lg={3} xs={6}>
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
                        </Col> */}
                    </Row>
                    <div className="box_title">
                        <h4>Hot Sale Mỗi Ngày</h4>
                        <p>Sản phẩm với giá cực kỳ hấp dẫn</p>
                    </div>
                    <div style={{ boxShadow: "0px 0px 25px 0px #d3dbee" }}>
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
    );
}
