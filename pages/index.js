import ModalReviewProduct from "src/components-share/Modal/ModalReviewProduct/ModalReviewProduct"
import Layout from "src/components/layout/Layout"
import Head from "next/head"
import { Col, Container, Row } from "react-bootstrap"
import ModalReviewCart from "src/components-share/Modal/ModalReviewCart/ModalReviewCart"
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
const datatest = {
    quantity: 5,
    urlImg: "https://bizweb.dktcdn.net/thumb/large/100/367/937/products/2-4d4650c2-dfd4-4467-bcb4-205c692552e1.jpg?v=1615519760717",
    title: "Cửa lưới chống muỗi loại to to to",
    price: 100000,
}

export default function Home() {
    const [openProductModal, setOpenProductModal] = useState(false)
    const [dataProductModal, setDataProductModal] = useState(1)
    function openProductModalEvent(dataPro) {
        setOpenProductModal(true)
        setDataProductModal(dataPro)
    }
    function closeProductModal() {
        setOpenProductModal(false)
    }

    console.log("HOme")
    const [openCartModal, setOpenCartModal] = useState(false)
    const [dataCartModal, setDataCartModal] = useState(1)
    function openCartModalEvent(dataPro) {
        setOpenCartModal(true)
        setDataCartModal(dataPro)
    }
    function closeCartModal() {
        setOpenCartModal(false)
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
                            <CardProduct
                                data={productData}
                                openReviewProductModal={() => openProductModalEvent(2)}
                                openReviewCartModal={() => openCartModalEvent()}
                            />
                            <CardProduct data={productData2} openReviewProductModal={() => openProductModalEvent(3)} />
                            <CardProduct data={productData} openReviewProductModal={() => openProductModalEvent(4)} />
                            <CardProduct data={productData2} openReviewProductModal={() => openProductModalEvent(5)} />
                            <CardProduct data={productData2} openReviewProductModal={() => openProductModalEvent(6)} />
                            <CardProduct data={productData} openReviewProductModal={() => openProductModalEvent(7)} />
                            <CardProduct data={productData2} openReviewProductModal={() => openProductModalEvent(8)} />
                            <CardProduct data={productData} openReviewProductModal={() => openProductModalEvent(9)} />
                            <CardProduct data={productData} openReviewProductModal={() => openProductModalEvent(10)} />
                            <CardProduct data={productData2} openReviewProductModal={() => openProductModalEvent(11)} />
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
                    <ModalReviewProduct isOpen={openProductModal} data={dataProductModal} closeModalEvent={closeProductModal} />
                    <ModalReviewCart data={datatest} isOpen={openCartModal} closeModalEvent={closeCartModal} />
                </Container>
            </Layout>
        </>
    )
}
