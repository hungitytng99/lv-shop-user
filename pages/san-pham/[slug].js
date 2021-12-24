import React from "react";
import Head from "next/head";
import Layout from "src/components/layout/Layout";
import { Col, Row, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import Link from "next/dist/client/link";
import { productData, productData2 } from "./../../src/constants/dataTest";
import CardProduct from "src/components-share/Card/CardProduct/CardProduct";
import PaginationCustom from "src/components-share/Pagination/PaginationCustom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faList, faTimes } from "@fortawesome/free-solid-svg-icons";
import { sortType } from "./../../src/constants/sortType";
import CardReview from "src/components-share/Card/CardReview/CardReview";
import { productService } from "./../../src/services/product/index";
import cookies from "next-cookies";

const reviewCard = {
    imageUrl: "https://bizweb.dktcdn.net/100/367/937/themes/740363/assets/col1.jpg?1630998054887",
    urlPage: "#",
    title: "Tiện ích nhà bếp",
};

export default function Slug(props) {
    let breadcrumb = [
        {
            title: "Tất cả sản phẩm",
            url: "/san-pham",
        },
    ];
    const { dataResponse, collectionId, query, baseUrlForPagination, baseUrlForSort, baseUrlForRange, itemsPerPage } = props;
    console.log(dataResponse);
    const { page = "1", sort = "latest" } = query;
    const menu = useSelector((stores) => stores.menuSlice.value.data);
    const lengthMenu = menu?.length || 0;
    for (let i = 0; i < lengthMenu; i++) {
        if (menu[i].cateId === collectionId) {
            breadcrumb.push({
                title: menu[i].title,
                url: menu[i].urlPage,
            });
            break;
        }
    }
    return (
        <>
            <Head>
                <title>{breadcrumb[1]?.title || breadcrumb[0].title}</title>
            </Head>
            <Layout titlePage={breadcrumb[1]?.title || breadcrumb[0].title} breadcrumb={breadcrumb}>
                <Container className="san_pham">
                    <Row style={{ marginTop: "30px" }}>
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
                    <hr />

                    <Row>
                        <Col xl={3} className="sidebar_sanpham">
                            <input id="toggle_sidebar_danhmucsanpham" type="checkbox" />
                            <div className="danh_muc_san_pham">
                                <label htmlFor="toggle_sidebar_danhmucsanpham">
                                    <FontAwesomeIcon icon={faList} />
                                    <FontAwesomeIcon icon={faTimes} />
                                </label>
                                <div className="box_title">Danh mục sản phẩm</div>
                                <div>
                                    <ul>
                                        {menu?.map((item, index) => {
                                            return (
                                                <Link key={"menusanpham" + index} href={item.urlPage} passHref>
                                                    <li>{item.title}</li>
                                                </Link>
                                            );
                                        })}
                                    </ul>
                                </div>
                                <div className="box_title">Thương hiệu</div>
                                <div className="box_title">Khoảng giá</div>
                            </div>
                        </Col>
                        <Col xl={9}>
                            <div className="box_title">
                                <span>{breadcrumb[1]?.title || breadcrumb[0].title}</span>
                                <span className="sort_by">
                                    <span>
                                        Sắp xếp theo: {sortType[sort]}{" "}
                                        <span>
                                            <FontAwesomeIcon icon={faCaretDown} />
                                        </span>
                                    </span>
                                    <div className="choice">
                                        <Link href={baseUrlForSort + "&sort=prices_asc"} passHref>
                                            <div>{sortType.prices_asc}</div>
                                        </Link>
                                        <Link href={baseUrlForSort + "&sort=prices_desc"} passHref>
                                            <div>{sortType.prices_desc}</div>
                                        </Link>
                                        <Link href={baseUrlForSort + "&sort=latest"} passHref>
                                            <div>{sortType.latest}</div>
                                        </Link>
                                        <Link href={baseUrlForSort + "&sort=oldest"} passHref>
                                            <div>{sortType.oldest}</div>
                                        </Link>
                                        <Link href={baseUrlForSort + "&sort=name_asc"} passHref>
                                            <div>{sortType.name_asc}</div>
                                        </Link>
                                        <Link href={baseUrlForSort + "&sort=name_desc"} passHref>
                                            <div>{sortType.name_desc}</div>
                                        </Link>
                                    </div>
                                </span>
                            </div>
                            <Row>
                                {dataResponse.data.listProduct.map((item, index) => {
                                    return (
                                        <Col key={"danhsachsanpham" + index} lg={3} xs={6} md={4} style={{ margin: "10px 0px" }}>
                                            <CardProduct data={item} />
                                        </Col>
                                    );
                                })}
                            </Row>
                            <div style={{ float: "right" }}>
                                <PaginationCustom totalItem={dataResponse.data.total} baseUrl={baseUrlForPagination} activePage={parseInt(page)} itemsPerPage={itemsPerPage} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Layout>
        </>
    );
}

export async function getServerSideProps(context) {
    const { resolvedUrl, query, params } = context;
    function getSortPriceType(sortType) {
        const isSortPrice = sortType || "";
        if (isSortPrice === "prices_desc") return "DESC";
        else if (isSortPrice === "prices_asc") return "ASC";
        return "";
    }
    let params_post = {
        limit: 16,
        offset: (Number(query?.page) - 1) * 16 || 0,
        title: "",
        collectionId: Number(query.slug.split("-")[0]) || "",
        status: "",
        maxPrice: "",
        minPrice: "",
        sortPrice: getSortPriceType(query.sort),
        createdAt: query.sort === "oldest" ? "ASC" : "DESC",
    };
    // console.log({ resolvedUrl, query, params })
    // console.log(context)
    try {
        const token = cookies(context).auth;
        const [baseUrl] = resolvedUrl.split("?");
        let baseUrlForPagination = baseUrl + "?sort=" + (query.sort === undefined ? "latest" : query.sort) + (query.range === undefined ? "" : "&range=" + query.range);
        let baseUrlForSort = baseUrl + "?page=1" + (query.range === undefined ? "" : "&range=" + query.range);
        let baseUrlForRange = baseUrl + "?page=1&sort=" + (query.sort === undefined ? "latest" : query.sort);

        const dataResponse = await productService.getListProduct(params_post, token);

        console.log({
            params_post,
            dataResponse,
            collectionId: params_post.collectionId,
            query,
            baseUrlForPagination,
            baseUrlForSort,
            baseUrlForRange,
        });
        return {
            props: {
                dataResponse,
                collectionId: params_post.collectionId,
                query,
                baseUrlForPagination,
                baseUrlForSort,
                baseUrlForRange,
                itemsPerPage: params_post.limit,
            },
        };
    } catch (error) {
        console.log(error);
        return {
            notFound: true,
        };
    }
}
