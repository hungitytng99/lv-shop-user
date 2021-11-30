import React from "react"
import Head from "next/head"
import Layout from "src/components/layout/Layout"
import { Col, Row, Container } from "react-bootstrap"
import { useSelector } from "react-redux"
import Link from "next/dist/client/link"
import { productData, productData2 } from "./../../src/constants/dataTest"
import CardProduct from "src/components-share/Card/CardProduct/CardProduct"
import PaginationCustom from "src/components-share/Pagination/PaginationCustom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown, faList, faTimes } from "@fortawesome/free-solid-svg-icons"
import { sortType } from "./../../src/constants/sortType"
import CardReview from "src/components-share/Card/CardReview/CardReview"

const reviewCard = {
    imageUrl: "https://bizweb.dktcdn.net/100/367/937/themes/740363/assets/col1.jpg?1630998054887",
    urlPage: "#",
    title: "Tiện ích nhà bếp",
}

export default function Slug(props) {
    const breadcrumb = [
        {
            title: "Tất cả sản phẩm",
            url: "/san-pham",
        },
    ]
    const { query, baseUrlForPagination, baseUrlForSort, baseUrlForRange } = props
    const { page = "1", sort = "latest" } = query
    const menu = useSelector((stores) => stores.menuSlice.value.data)
    const listProducts = [productData, productData2, productData2, productData, productData, productData, productData]
    return (
        <>
            <Head>
                <title>{breadcrumb[0].title}</title>
            </Head>
            <Layout titlePage={breadcrumb[0].title} breadcrumb={breadcrumb}>
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
                                            )
                                        })}
                                    </ul>
                                </div>
                                <div className="box_title">Thương hiệu</div>
                                <div className="box_title">Khoảng giá</div>
                            </div>
                        </Col>
                        <Col xl={9}>
                            <div className="box_title">
                                <span>Tất cả sản phẩm</span>
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
                                {listProducts.map((item, index) => {
                                    return (
                                        <Col key={"danhsachsanpham" + index} lg={3} xs={6} md={4} style={{ margin: "10px 0px" }}>
                                            <CardProduct data={item} openReviewProductModal={() => alert("2")} openReviewCartModal={() => alert("3")} />
                                        </Col>
                                    )
                                })}
                            </Row>
                            <div style={{ float: "right" }}>
                                <PaginationCustom totalItem={30} baseUrl={baseUrlForPagination} activePage={parseInt(page)} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Layout>
        </>
    )
}

export async function getServerSideProps(context) {
    const { resolvedUrl, query, params } = context

    // console.log({ resolvedUrl, query, params })
    // console.log(context)
    try {
        const [baseUrl] = resolvedUrl.split("?")
        let baseUrlForPagination =
            baseUrl + "?sort=" + (query.sort === undefined ? "latest" : query.sort) + (query.range === undefined ? "" : "&range=" + query.range)
        let baseUrlForSort = baseUrl + "?page=1" + (query.range === undefined ? "" : "&range=" + query.range)
        let baseUrlForRange = baseUrl + "?page=1&sort=" + (query.sort === undefined ? "latest" : query.sort)

        console.log({
            query,
            baseUrlForPagination,
            baseUrlForSort,
            baseUrlForRange,
        })
        return {
            props: {
                query,
                baseUrlForPagination,
                baseUrlForSort,
                baseUrlForRange,
            },
        }
    } catch (error) {
        return {
            notFound: true,
        }
    }
}
