import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useRef } from "react"
import { Container, Row } from "react-bootstrap"

import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import { ImagesPath } from "constants/ImagesPath"
import Image from "next/dist/client/image"
import { Col } from "react-bootstrap"
import StarRating from "components-share/Rating/StarRating"

export default function ModalReviewProduct(props) {
    const { isOpen, data, closeModalEvent } = props
    const numberOrder = useRef(1)
    function increaseOder() {
        numberOrder.current.value++
    }
    function decreaseOder() {
        if (numberOrder.current.value > 1) numberOrder.current.value--
    }
    function closeModal() {
        closeModalEvent()
    }
    function checkInputNum(e) {
        let currentvalue = Number.parseInt(numberOrder.current.value)
        console.log(currentvalue == NaN)
        if (isNaN(currentvalue) || currentvalue < 1) numberOrder.current.value = "1"
    }
    return (
        <div className="modal_custom" style={{ display: isOpen ? "block" : "none" }}>
            <div className="modal_custom-background" onClick={closeModal}></div>
            <Container className="modal_custom-content">
                <span onClick={closeModal} className="modal_custom-close">
                    <FontAwesomeIcon icon={faTimes} />
                </span>
                <div className="main_content">
                    <Row>
                        <Col md={5} style={{ padding: "0px 40px 0px 40px" }}>
                            <Carousel
                                autoPlay={true}
                                interval={5000}
                                showArrows={false}
                                infiniteLoop={true}
                                showThumbs={true}
                                emulateTouch={true}
                                thumbWidth={100}
                                className="custom_carousel"
                            >
                                <div>
                                    <img src="https://bizweb.dktcdn.net/thumb/large/100/367/937/products/3-f821fea3-9d0d-4a0e-b3d5-74ba76ddc54d.jpg" />
                                </div>
                                <div>
                                    <img src="https://bizweb.dktcdn.net/thumb/large/100/367/937/products/4-ef9a77a3-ac98-44aa-80e7-0d352b03105c.jpg" />
                                </div>
                                <div>
                                    <img src="https://bizweb.dktcdn.net/thumb/large/100/367/937/products/9-f94bfc18-abe3-4549-be3f-79ab7761d23d.jpg" />
                                </div>
                                <div>
                                    <img src="https://bizweb.dktcdn.net/thumb/large/100/367/937/products/3-f821fea3-9d0d-4a0e-b3d5-74ba76ddc54d.jpg" />
                                </div>
                                <div>
                                    <img src="https://bizweb.dktcdn.net/thumb/large/100/367/937/products/4-ef9a77a3-ac98-44aa-80e7-0d352b03105c.jpg" />
                                </div>
                                <div>
                                    <img src="https://bizweb.dktcdn.net/thumb/large/100/367/937/products/9-f94bfc18-abe3-4549-be3f-79ab7761d23d.jpg" />
                                </div>
                                <div>
                                    <img src="https://bizweb.dktcdn.net/thumb/large/100/367/937/products/3-f821fea3-9d0d-4a0e-b3d5-74ba76ddc54d.jpg" />
                                </div>
                                <div>
                                    <img src="https://bizweb.dktcdn.net/thumb/large/100/367/937/products/4-ef9a77a3-ac98-44aa-80e7-0d352b03105c.jpg" />
                                </div>
                                <div>
                                    <img src="https://bizweb.dktcdn.net/thumb/large/100/367/937/products/9-f94bfc18-abe3-4549-be3f-79ab7761d23d.jpg" />
                                </div>
                            </Carousel>
                        </Col>
                        <Col md={7} className="detal_product">
                            <h2 className="detal_product-name">Xốp dán tường</h2>
                            <p>Thương hiệu: Đang cập nhật | Tình trạng: Còn hàng</p>

                            <StarRating initialRating={3.5} />
                            <div className="detal_product-cost">
                                <h3 className="detal_product-cost-current">185.000₫</h3>
                                <span className="detal_product-cost-old">225.000₫</span>
                            </div>
                            <p>Thông tin sản phẩm đang cập nhật</p>
                            <hr />
                            <div className="order_product">
                                <div className="order_product-quantity">
                                    <span className="order_product-quantity-minus" onClick={decreaseOder}>
                                        {" - "}
                                    </span>
                                    <input
                                        ref={numberOrder}
                                        onKeyUp={checkInputNum}
                                        className="order_product-quantity-num"
                                        defaultValue="1"
                                        min="1"
                                        type="number"
                                    />
                                    <span className="order_product-quantity-plus" onClick={increaseOder}>
                                        {" + "}
                                    </span>
                                </div>
                                <div className="order_product-btn_order">Thêm vào giỏ hàng</div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}
