import Layout from "src/components/layout/Layout";
import Head from "next/head";
import { Col, Container, Row } from "react-bootstrap";
import CardProduct from "src/components-share/Card/CardProduct/CardProduct";
import CardReview from "src/components-share/Card/CardReview/CardReview";
import CarouselProduct from "src/components-share/Carousel/CarouselProduct";
import CarouselBannerHomePage from "src/components/pages/home/CarouselBannerHomePage";
import { useSelector } from "react-redux";
import { getListRandomNumber } from "./../src/share_function/index";
import { productService } from "src/services/product";
import { useEffect } from "react";
import { useState } from "react";
import CardNews from "./../src/components-share/Card/CardNews/CardNews";
import Cookies from "js-cookie";
import { storageKey } from "src/constants/storageKeys";

export default function Home(props) {
    const token = Cookies.get(storageKey.Cookie_token);
    const [productData, setProductData] = useState({
        hotProduct: {},
        newProduct: {},
    });

    const [specificProduct, setSpecificProduct] = useState({
        title: "",
        data: [],
    });
    const menu = useSelector((stores) => stores.menuSlice.value);
    const menulength = menu.data?.length || 0;
    const randomCardReview = getListRandomNumber(4, menulength - 1);
    useEffect(() => {
        (async () => {
            if (menu.data?.length) {
                const randomCollectionId = Math.floor(Math.random() * (menulength - 1));
                const listproduct = await productService.getListProduct({ limit: 12, offset: 0, collectionId: randomCollectionId, createdAt: "DESC" }, token);
                setSpecificProduct((prev) => {
                    return {
                        ...prev,
                        title: menu.data[randomCollectionId].title,
                        data: listproduct.data.listProduct,
                    };
                });
                const hotProductdata = await productService.getListProduct({ limit: 12, offset: 0, bestSelling: true, createdAt: "DESC" }, token);
                const newProductdata = await productService.getListProduct({ limit: 12, offset: 0, bestSelling: false, createdAt: "DESC" }, token);
                setProductData({
                    hotProduct: hotProductdata,
                    newProduct: newProductdata,
                });
            }
        })();
    }, [menu]);
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
                    </Row>
                    <div className="box_title">
                        <h4>Hot Sale Mỗi Ngày</h4>
                        <p>Sản phẩm với giá cực kỳ hấp dẫn</p>
                    </div>
                    <div style={{ boxShadow: "0px 0px 25px 0px #d3dbee" }}>
                        <CarouselProduct>
                            {productData.hotProduct.data?.listProduct?.map((item, index) => {
                                return <CardProduct key={item.urlProduct + "hot" + index} data={item} />;
                            }) || <></>}
                        </CarouselProduct>
                    </div>
                    <div className="box_title">
                        <h4>Sản Phẩm Mới</h4>
                        <p>Cập nhật sản phẩm mới nhất</p>
                    </div>
                    <div style={{ boxShadow: "0px 0px 25px 0px #d3dbee" }}>
                        <CarouselProduct>
                            {productData.newProduct.data?.listProduct?.map((item, index) => {
                                return <CardProduct key={item.urlProduct + "new" + index} data={item} />;
                            }) || <></>}
                        </CarouselProduct>
                    </div>
                    {menulength > 0 ? (
                        <>
                            <div className="box_title">
                                <h4>{specificProduct.title}</h4>
                                <p>Cập nhật sản phẩm mới nhất</p>
                            </div>
                            <div style={{ boxShadow: "0px 0px 25px 0px #d3dbee" }}>
                                <CarouselProduct>
                                    {specificProduct?.data?.map((item, index) => {
                                        return <CardProduct key={item.urlProduct + index} data={item} />;
                                    }) || <></>}
                                </CarouselProduct>
                            </div>
                        </>
                    ) : null}

                    <div className="box_title">
                        <h4>Tin tức {"&"} kiến thức</h4>
                    </div>
                    <div>
                        <Row>
                            <Col lg={4} xs={6}>
                                <CardNews />
                            </Col>
                            <Col lg={4} xs={6}>
                                <CardNews />
                            </Col>
                            <Col lg={4} xs={6}>
                                <CardNews />
                            </Col>
                        </Row>
                    </div>
                </Container>
            </Layout>
        </>
    );
}
