import ModalReviewProduct from "src/components-share/Modal/ModalReviewProduct/ModalReviewProduct"
import Layout from "src/components/layout/Layout"
import Head from "next/head"
import { Col, Container, Row } from "react-bootstrap"
import CardProduct from "src/components-share/Card/CardProduct/CardProduct"
import CardReview from "src/components-share/Card/CardReview/CardReview"
import CarouselBannerHomePage from "src/components-share/Carousel/CarouselBannerHomePage"
import CarouselProduct from "src/components-share/Carousel/CarouselProduct"
import { useEffect, useState } from "react"
import { fetchUserById, login } from "./homeSlices"
import { useDispatch, useSelector } from "react-redux"
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
    const [openModal, setOpenModal] = useState(false)
    const [dataModal, setData] = useState(1)

    function openModalEvent(dataPro) {
        setOpenModal(true)
        setData(dataPro)
    }
    function closeModalEvent() {
        setOpenModal(false)
    }

    const dispatch = useDispatch()
    const userState = useSelector((state) => state.homepage)
    function handleLogin() {
        // 3.1 REDUX ASYNC: dispatch an async event
        // dispatch(fetchUserById({ userId: 2 }));
        // .unwrap().then(response => {
        //     console.log('response: ', response);
        // });

        // 3.1 REDUX STANDARD: dispatch an event
        dispatch(login({ email: "emailLogin@gmail.com" }))
    }
    return (
        <>
            <Head>
                <title>Trang chủ</title>
            </Head>
            <Layout>
                {/* For guide only */}
                User: {userState.errors ?? userState?.user.email}
                <button onClick={handleLogin}>Login</button>
                {/* End */}
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
                            <CardProduct data={productData} openReviewProductModal={() => openModalEvent(2)} />
                            <CardProduct data={productData2} openReviewProductModal={() => openModalEvent(3)} />
                            <CardProduct data={productData} openReviewProductModal={() => openModalEvent(4)} />
                            <CardProduct data={productData2} openReviewProductModal={() => openModalEvent(5)} />
                            <CardProduct data={productData2} openReviewProductModal={() => openModalEvent(6)} />
                            <CardProduct data={productData} openReviewProductModal={() => openModalEvent(7)} />
                            <CardProduct data={productData2} openReviewProductModal={() => openModalEvent(8)} />
                            <CardProduct data={productData} openReviewProductModal={() => openModalEvent(9)} />
                            <CardProduct data={productData} openReviewProductModal={() => openModalEvent(10)} />
                            <CardProduct data={productData2} openReviewProductModal={() => openModalEvent(11)} />
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
                    <ModalReviewProduct isOpen={openModal} data={dataModal} closeModalEvent={closeModalEvent} />
                </Container>
            </Layout>
        </>
    )
}
