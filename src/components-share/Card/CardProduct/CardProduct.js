import React, { useState } from "react";
import Link from "next/dist/client/link";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faCogs, faEye } from "@fortawesome/free-solid-svg-icons";
import { addProductToCart } from "src/redux/slices/cartSlices";
import { useDispatch } from "react-redux";
import { format_d_currency } from "./../../../share_function/index";
import { openProductModal } from "./../../../redux/slices/modalProductSlice";
import { openCartModal } from "src/redux/slices/modalCartSlice";

export default function CardProduct(props) {
    const { data } = props;
    const dispatch = useDispatch();
    function addProduct(params) {
        dispatch(addProductToCart(params));
        dispatch(openCartModal());
    }
    function openReviewProductModal() {
        dispatch(openProductModal(data.id));
    }
    return (
        <div className="product_card user-not-selected">
            <div className="product_card-img">
                <Link href={data.urlProduct} passHref>
                    <img src={data.urlImg} />
                </Link>
                <div className="product_card-img-mask">
                    <span onClick={() => openReviewProductModal()}>
                        <FontAwesomeIcon icon={faEye} />
                    </span>
                    {data.totalVariant === 1 ? (
                        <span onClick={() => addProduct({ variantId: data.firstVariantId, quantity: 1 })}>
                            <FontAwesomeIcon icon={faCartPlus} />
                        </span>
                    ) : (
                        <Link href={data.urlProduct} passHref>
                            <span>
                                <FontAwesomeIcon icon={faCogs} />
                            </span>
                        </Link>
                    )}
                </div>
            </div>
            <p className="product_card-title">
                <Link href={data.urlProduct} passHref>
                    <a>{data.title}</a>
                </Link>
            </p>
            <Row style={{ paddingBottom: "15px" }}>
                {data?.oldPrice ? (
                    <>
                        <Col className="cur_price" md={6}>
                            {format_d_currency(data.curPrice)}
                        </Col>
                        <Col className="old_price" md={6}>
                            {format_d_currency(data.oldPrice)}
                        </Col>
                    </>
                ) : (
                    <Col md={12} style={{ color: "#f6470e", fontWeight: "bold", textAlign: "center", fontSize: "15px" }}>
                        {format_d_currency(data.curPrice)}
                    </Col>
                )}
            </Row>
            <span className={"product_card-status " + "product_card-status-" + data?.status}></span>
        </div>
    );
}
