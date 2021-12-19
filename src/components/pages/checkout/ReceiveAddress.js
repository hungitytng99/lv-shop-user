import React from "react"
import { FloatingLabel, Form } from "react-bootstrap"
export default function ReceiveAddress() {
    return (
        <div>
            <h5>Thông tin nhận hàng</h5>
            <div className="receive_address">
                <FloatingLabel controlId="floatingSelect" label="Sổ địa chỉ" style={{ marginBottom: "20px" }}>
                    <Form.Select aria-label="Floating label select example">
                        <option>Địa chỉ khác</option>
                        <option value="1">One</option>
                    </Form.Select>
                </FloatingLabel>
                <FloatingLabel controlId="nameInput" label="Họ và Tên" className="mb-3">
                    <Form.Control type="name" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="phoneInput" label="Số điện thoại" className="mb-3">
                    <Form.Control type="tel" placeholder="phone" />
                </FloatingLabel>
                <FloatingLabel controlId="addressInput" label="Địa chỉ" className="mb-3">
                    <Form.Control type="text" placeholder="Address" />
                </FloatingLabel>
            </div>
        </div>
    )
}
