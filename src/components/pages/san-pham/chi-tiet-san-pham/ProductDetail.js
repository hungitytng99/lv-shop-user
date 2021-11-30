import React, { useRef } from "react"
import { Row } from "react-bootstrap"
import { Carousel } from "react-responsive-carousel"
import { Col } from "react-bootstrap"
import StarRating from "src/components-share/Rating/StarRating"
import { format_d_currency } from "src/share_function"

export default function ProductDetail(props) {
    const { product } = props
    const { listImg, title, trademark, status, rating, productInfo, curPrice, oldPrice } = product

    const numberOrder = useRef(1)

    function increaseOder() {
        numberOrder.current.value++
    }
    function decreaseOder() {
        if (numberOrder.current.value > 1) numberOrder.current.value--
    }

    function checkInputNum(e) {
        let currentvalue = Number.parseInt(numberOrder.current.value)
        // console.log(currentvalue == NaN)
        if (isNaN(currentvalue) || currentvalue < 1) numberOrder.current.value = "1"
    }
    return (
        <Row style={{ marginTop: "20px" }}>
            <Col md={5} style={{ padding: "0px 45px 0px 45px" }}>
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
                    {listImg?.map((item, index) => {
                        return (
                            <div key={item + index}>
                                <img src={item} alt="Tiện ích Lộc Vừng shop" />
                            </div>
                        )
                    })}
                </Carousel>
            </Col>
            <Col md={7} className="detal_product">
                <h2 className="detal_product-name">{title}</h2>
                <p>
                    Thương hiệu: {trademark} | Tình trạng: {status}
                </p>

                <StarRating initialRating={rating} />
                <div className="detal_product-cost">
                    <h3 className="detal_product-cost-current">{format_d_currency(curPrice)}</h3>
                    <span className="detal_product-cost-old">{format_d_currency(oldPrice)}</span>
                </div>
                <p>Thông tin sản phẩm {productInfo}</p>
                <hr />
                <div className="order_product">
                    <div className="order_product-quantity">
                        <span className="order_product-quantity-minus" onClick={decreaseOder}>
                            {" - "}
                        </span>
                        <input ref={numberOrder} onKeyUp={checkInputNum} className="order_product-quantity-num" defaultValue="1" min="1" type="number" />
                        <span className="order_product-quantity-plus" onClick={increaseOder}>
                            {" + "}
                        </span>
                    </div>
                    <div className="order_product-btn_order">Thêm vào giỏ hàng</div>
                </div>
            </Col>
        </Row>
    )
}
