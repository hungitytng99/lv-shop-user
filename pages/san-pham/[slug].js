import React from "react"
import SanPham from "."
import { Col, Row } from "react-bootstrap"
import { useSelector } from "react-redux"
import Link from "next/dist/client/link"
import { productData, productData2 } from "./../../src/constants/dataTest"
import CardProduct from "src/components-share/Card/CardProduct/CardProduct"
import PaginationCustom from "src/components-share/Pagination/PaginationCustom"

export default function slug() {
    const menu = useSelector((stores) => stores.menuSlice.value.data)
    const listProducts = [productData, productData2, productData2, productData, productData, productData, productData]
    return (
        <div>
            <SanPham>
                <Row>
                    <Col xl={3}>
                        <div className="danh_muc_san_pham">
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
                                <span>Sắp xếp theo: {"Hàng mới nhất"}</span>
                                <div className="choice">
                                    <div>Giá tăng dần</div>
                                    <div>Giá giảm dần</div>
                                    <div>Mới nhất</div>
                                    <div>Cũ nhất</div>
                                    <div>{"A->Z"}</div>
                                    <div>{"Z->A"}</div>
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
                            <PaginationCustom totalItem={30} />
                        </div>
                    </Col>
                </Row>
            </SanPham>
        </div>
    )
}

export async function getServerSideProps(slug) {
    // console.log(slug)
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
