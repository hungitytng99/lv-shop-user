import React, { useState } from "react"
import Link from "next/dist/client/link"
import { Col } from "react-bootstrap"
import { Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartPlus, faEye } from "@fortawesome/free-solid-svg-icons"

export default function CardProduct(props) {
    const { data, openReviewProductModal, openReviewCartModal } = props

    return (
        <div className="product_card">
            <div className="product_card-img">
                <img src={data.urlImg} />
                <div className="product_card-img-mask">
                    <span onClick={() => openReviewProductModal()}>
                        <FontAwesomeIcon icon={faEye} />
                    </span>
                    <span onClick={() => openReviewCartModal()}>
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
            <Row style={{ textAlign: "center", letterSpacing: "1px", paddingBottom: "15px" }}>
                <Col xs={data?.oldPrice ? 6 : 12} style={{ color: "#f6470e", fontWeight: "bold", textAlign: data?.oldPrice ? "right" : "center" }}>
                    {data.curPrice}
                </Col>

                {data?.oldPrice ? (
                    <Col xs={6} style={{ color: "#acacac", textDecoration: "line-through", textAlign: "left" }}>
                        {data.oldPrice}
                    </Col>
                ) : (
                    <></>
                )}
            </Row>
            <span className={"product_card-status " + "product_card-status-" + data?.status}></span>
        </div>
    )
}
