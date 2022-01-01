import React from "react";
import Head from "next/head";
import Layout from "src/components/layout/Layout";
import { Container, Row, Col } from "react-bootstrap";
import CardProduct from "src/components-share/Card/CardProduct/CardProduct";
import CarouselProduct from "src/components-share/Carousel/CarouselProduct";
import cookies from "next-cookies";
import ProductDetail from "src/components/pages/san-pham/chi-tiet-san-pham/ProductDetail";
import TabsInfor from "src/components/pages/san-pham/tabsInfor/TabsInfor";
import { productService } from "./../../src/services/product/index";

export default function SanPham(props) {
    const { product, response, relatedProducts } = props;
    const breadcrumb = [
        {
            title: "Sản phẩm",
            url: "/san-pham/all",
        },
        {
            title: "Găng tay đi xe máy mùa đông lót nỉ",
            url: "/san-pham?product=" + product,
        },
    ];
    console.log(relatedProducts);
    return (
        <>
            <Head>
                <title>{breadcrumb[1].title}</title>
            </Head>
            <Layout titlePage={breadcrumb[1].title} breadcrumb={breadcrumb}>
                <Container className="san_pham">
                    <ProductDetail product={response.data} />
                    <TabsInfor product={response.data} />
                    <div>
                        <div className="box_title">
                            <h4 style={{ textAlign: "center" }}>Sản phẩm liên quan</h4>
                        </div>
                        <div style={{ boxShadow: "0px 0px 25px 0px #d3dbee" }}>
                            <CarouselProduct>
                                {relatedProducts?.data.listProduct.map((item, index) => {
                                    return <CardProduct key={"splienquna" + item.id + index} data={item} />;
                                })}
                            </CarouselProduct>
                        </div>
                    </div>
                </Container>
            </Layout>
        </>
    );
}

export async function getServerSideProps(context) {
    const { resolvedUrl, query, params } = context;
    const { product = "Không xác định" } = query;
    try {
        const productID = Number(query.product.split("-")[0]);
        const token = cookies(context).auth;
        const response = await productService.getDetailProduct(productID, token);
        const relatedProducts = await productService.getListProduct({ limit: 12, offset: 0, collectionId: response.data.collections[0] || "", createdAt: "DESC" }, token);
        console.log({ resolvedUrl, query, params, response });

        return {
            props: {
                product,
                response,
                relatedProducts,
            },
        };
    } catch (error) {
        console.log(error);
        return {
            notFound: true,
        };
    }
}
