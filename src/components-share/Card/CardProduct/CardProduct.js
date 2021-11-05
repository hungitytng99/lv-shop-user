import React, { useState } from "react"
import Link from "next/dist/client/link"
import { Col } from "react-bootstrap"
import { Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartPlus, faEye } from "@fortawesome/free-solid-svg-icons"
import { addProductToCart } from "src/redux/slices/cartSlices"
import { useDispatch } from "react-redux"
import { format_d_currency } from "./../../../share_function/index"
import { openProductModal } from "./../../../redux/slices/modalProductSlice"
import { openCartModal } from "src/redux/slices/modalCartSlice"

export default function CardProduct(props) {
    const { data, openReviewCartModal } = props
    const dispatch = useDispatch()
    function addProduct() {
        dispatch(addProductToCart())
        dispatch(openCartModal())
    }
    function openReviewProductModal() {
        dispatch(openProductModal())
    }
    return (
        <div className="product_card">
            <div className="product_card-img">
                <img src={data.urlImg} />
                <div className="product_card-img-mask">
                    <span onClick={() => openReviewProductModal()}>
                        <FontAwesomeIcon icon={faEye} />
                    </span>
                    <span onClick={() => addProduct()}>
                        {" "}
                        <FontAwesomeIcon icon={faCartPlus} />
                    </span>
                </div>
            </div>
            <p className="product_card-title">
                <Link href={data.urlProduct} passHref>
                    <a>{data.title}</a>
                </Link>
            </p>
            <Row style={{ paddingBottom: "15px" }}>
                <Col md={data.oldPrice ? 6 : 12} style={{ color: "#f6470e", fontWeight: "bold", textAlign: "center" }}>
                    {format_d_currency(data.curPrice)}
                </Col>

                {data?.oldPrice ? (
                    <Col md={6} style={{ color: "#acacac", textDecoration: "line-through", textAlign: "center" }}>
                        {format_d_currency(data.oldPrice)}
                    </Col>
                ) : (
                    <></>
                )}
            </Row>
            <span className={"product_card-status " + "product_card-status-" + data?.status}></span>
        </div>
    )
}
