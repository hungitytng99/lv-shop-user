import React, { useRef, useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";
import { Col } from "react-bootstrap";
import StarRating from "src/components-share/Rating/StarRating";
import { format_d_currency } from "src/share_function";
import { useDispatch } from "react-redux";
import { addProductToCart } from "./../../../../redux/slices/cartSlices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default function ProductDetail(props) {
    const dispatch = useDispatch();
    const [alertBox, setAlertBox] = useState({ open: false, content: "", icon: faCheckCircle });
    const { product } = props;
    const { listImg = [], title = "", trademark = "", status = "", productInfo = "", curPrice = 0, oldPrice = 0, options = [], variants = [] } = product;
    const [datashow, setDataShow] = useState({
        variantId: variants[0]?.id || null,
        oldPrice: oldPrice,
        curPrice: curPrice,
        imageIndex: 0,
        activeOption: variants[0]?.existByOptions || [],
    });
    const numberOrder = useRef(1);
    // console.log({ datashow });
    useEffect(() => {
        setDataShow({
            variantId: variants[0]?.id || null,
            oldPrice: oldPrice,
            curPrice: curPrice,
            imageIndex: 0,
            activeOption: variants[0]?.existByOptions || [],
        });
    }, [product]);
    let closeAlertTimeout = setTimeout(() => {}, 100);
    function addProduct() {
        clearTimeout(closeAlertTimeout);
        dispatch(addProductToCart({ variantId: datashow.variantId, quantity: Number(numberOrder.current.value) }));
        setAlertBox({ open: true, content: "Sản phẩm vừa được thêm vào giỏ hàng của bạn", icon: faCheckCircle });
        closeAlertTimeout = setTimeout(() => {
            setAlertBox({ open: false, content: "", icon: faCheckCircle });
        }, 1500);
    }

    // useEffect(()=> {

    // },[alertBox])

    function changeOptionVariant(indexOptionChange, valueChange) {
        let newActiveOption = [...datashow.activeOption];
        newActiveOption[indexOptionChange] = valueChange;
        let variantLength = variants?.length;
        let activeOptionLength = newActiveOption.length;
        let newDataShow = {};
        for (let i = 0; i < variantLength; i++) {
            let kt = true;
            for (let j = 0; j < activeOptionLength; j++) {
                if (newActiveOption[j] != variants[i].existByOptions[j]) {
                    kt = false;
                    break;
                }
            }
            if (kt == true) {
                listImg.map((img, index) => {
                    if (img.id == variants[i].featureImageId) {
                        newDataShow.imageIndex = index;
                    }
                });
                newDataShow = {
                    ...newDataShow,
                    variantId: variants[i].id,
                    oldPrice: variants[i].oldPrice,
                    curPrice: variants[i].curPrice,
                    activeOption: variants[i].existByOptions,
                };

                break;
            }
        }
        setDataShow({ ...newDataShow });
    }

    function increaseOder() {
        numberOrder.current.value++;
    }
    function decreaseOder() {
        if (numberOrder.current.value > 1) numberOrder.current.value--;
    }

    function checkInputNum(e) {
        let currentvalue = Number.parseInt(numberOrder.current.value);
        if (isNaN(currentvalue) || currentvalue < 1) numberOrder.current.value = "1";
    }
    return (
        <Row style={{ margin: "20px 0px" }}>
            <Col md={5} style={{ padding: "0px 45px 0px 45px" }}>
                <Carousel
                    selectedItem={datashow.imageIndex}
                    autoPlay={false}
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
                            <div key={"detailproduct" + item.id + index}>
                                <img src={`${process.env.NEXT_PUBLIC_IMG_BASE_URL}/${item.id}`} />
                            </div>
                        );
                    })}
                </Carousel>
            </Col>
            <Col md={7} className="detal_product">
                <h2 className="detal_product-name">{title}</h2>
                <p>
                    Thương hiệu: {trademark} | Tình trạng: {status}
                </p>

                {/* <StarRating initialRating={rating} /> */}
                <div className="detal_product-cost">
                    <h3 className="detal_product-cost-current">{format_d_currency(datashow.curPrice)}</h3>
                    <span className="detal_product-cost-old">{format_d_currency(datashow.oldPrice)}</span>
                </div>
                <p>Thông tin sản phẩm: </p>
                <div dangerouslySetInnerHTML={{ __html: productInfo }} />
                <hr />
                {options?.map((opt, i) => {
                    return (
                        <div key={"opt" + opt.title + i} className="pick_variant">
                            <p className="opt_title">{opt.title}:</p>
                            <div>
                                {opt.values.map((val, j) => {
                                    return (
                                        <span
                                            key={opt.title + val + j}
                                            className={datashow.activeOption[i] == val ? "btn_pick_variant active_btn_opt" : "btn_pick_variant"}
                                            onClick={() => changeOptionVariant(i, val)}
                                        >
                                            {val}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
                <div className="order_product" style={{ marginTop: "20px" }}>
                    <div className="order_product-quantity">
                        <span className="order_product-quantity-minus" onClick={decreaseOder}>
                            {" - "}
                        </span>
                        <input ref={numberOrder} onKeyUp={checkInputNum} className="order_product-quantity-num" defaultValue="1" min="1" type="number" />
                        <span className="order_product-quantity-plus" onClick={increaseOder}>
                            {" + "}
                        </span>
                    </div>
                    <div className="order_product-btn_order" onClick={addProduct}>
                        Thêm vào giỏ hàng
                    </div>
                </div>
            </Col>
            <div className="alert_box success" style={{ top: alertBox.open ? "100px" : "-100px" }}>
                <div className="alert_content">
                    <span>
                        <FontAwesomeIcon icon={alertBox.icon} />
                    </span>
                    <span style={{ marginLeft: "15px" }}>{alertBox.content}</span>
                </div>
            </div>
        </Row>
    );
}
