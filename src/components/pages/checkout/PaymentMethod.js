import { faCreditCard, faMoneyBillAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateCheckoutInfo } from "src/redux/slices/checkoutSlice";

export default function PaymentMethod() {
    const dispatch = useDispatch();
    const dataCheckout = useSelector((stores) => stores.checkoutSlice.value);

    function changePaymentMethod(value) {
        const newDataCheckout = {
            ...dataCheckout,
            paymentMethod: value,
        };
        dispatch(updateCheckoutInfo(newDataCheckout));
    }
    return (
        <div style={{ margin: "20px 10px" }}>
            <div>
                <h5>Phương thức thanh toán</h5>
            </div>
            <div className="payment">
                <div className="payment_choice">
                    <div className="payment_choice_title" onClick={() => changePaymentMethod("banking")}>
                        <Form.Check type="radio" checked={dataCheckout.paymentMethod === "banking"} style={{ margin: "0px 10px 0px 0px" }} readOnly />
                        <span style={{ margin: "0px 10px 0px 0px" }}>Chuyển khoản qua ngân hàng</span>
                        <FontAwesomeIcon icon={faCreditCard} />
                    </div>
                    <div className="payment_choice_content" style={{ display: dataCheckout.paymentMethod === "banking" ? "" : "none" }}>
                        <p>
                            Quý khách hàng có thể thanh toán bằng hình thức chuyển khoản tới một trong các ngân hàng dưới đây.
                            <br />
                            Nội dung chuyển khoản vui lòng ghi chính xác Mã đơn_Số điện thoại đặt hàng (ví dụ: HTW1308_0968123468).
                            <br /> Shop sẽ gọi điện lại để xác nhận ngay sau đó.
                            <br />
                            ------------------------------------------------
                            <br /> VPBank - Ngân hàng Việt Nam Thịnh Vượng.
                            <br /> Đinh Văn Thư 6782299
                            <br />
                            ------------------------------------------------
                            <br /> ACB - Ngân hàng Á Châu
                            <br /> Đinh Văn Thư 214135819
                        </p>
                    </div>
                </div>
                <div className="payment_choice">
                    <div className="payment_choice_title" onClick={() => changePaymentMethod("COD")}>
                        <Form.Check type="radio" checked={dataCheckout.paymentMethod === "COD"} style={{ margin: "0px 10px 0px 0px" }} readOnly />
                        <span style={{ margin: "0px 10px 0px 0px" }}>Thanh toán khi giao hàng (COD)</span>
                        <FontAwesomeIcon icon={faMoneyBillAlt} />
                    </div>
                    <div className="payment_choice_content" style={{ display: dataCheckout.paymentMethod === "COD" ? "" : "none" }}>
                        <p>Bạn chỉ phải thanh toán khi nhận được hàng</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
