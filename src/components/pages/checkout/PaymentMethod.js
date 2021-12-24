import { faCreditCard, faMoneyBillAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Form } from "react-bootstrap";

export default function PaymentMethod() {
    const [paymentChoice, setPaymentChoice] = useState(0);

    return (
        <div style={{ margin: "20px 10px" }}>
            <div>
                <h5>Phương thức thanh toán</h5>
            </div>
            <div className="payment">
                <div className="payment_choice">
                    <div className="payment_choice_title" onClick={() => setPaymentChoice(1)}>
                        <Form.Check type="radio" checked={paymentChoice === 1} style={{ margin: "0px 10px 0px 0px" }} />
                        <span style={{ margin: "0px 10px 0px 0px" }}>Chuyển khoản qua ngân hàng</span>
                        <FontAwesomeIcon icon={faCreditCard} />
                    </div>
                    <div className="payment_choice_content" style={{ display: paymentChoice === 1 ? "" : "none" }}>
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
                    <div className="payment_choice_title" onClick={() => setPaymentChoice(2)}>
                        <Form.Check type="radio" checked={paymentChoice === 2} style={{ margin: "0px 10px 0px 0px" }} />
                        <span style={{ margin: "0px 10px 0px 0px" }}>Thanh toán khi giao hàng (COD)</span>
                        <FontAwesomeIcon icon={faMoneyBillAlt} />
                    </div>
                    <div className="payment_choice_content" style={{ display: paymentChoice === 2 ? "" : "none" }}>
                        <p>Bạn chỉ phải thanh toán khi nhận được hàng</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
