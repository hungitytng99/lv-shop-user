import React from "react"
import CartItem from "./../../Cart/cart_item/CartItem"
import { Container } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import ModalLayout from "../ModalLayout"
import { useDispatch, useSelector } from "react-redux"
import Link from "next/dist/client/link"
import { format_d_currency } from "src/share_function"
import { v4 as uuidv4 } from "uuid"
import { closeCartModal } from "src/redux/slices/modalCartSlice"

export default function ModalReviewCart(props) {
    const dispatch = useDispatch()
    const { open, loading } = useSelector((stores) => stores.modalCartSlice)
    const cartData = useSelector((stores) => stores.cartSlice.value)
    const productList = cartData.products

    function closeModalEvent() {
        dispatch(closeCartModal())
    }
    return (
        <ModalLayout isOpen={open} closeModalEvent={() => closeModalEvent()}>
            <div className="modal_review_cart">
                <div style={{ background: "#e8e6e6", padding: "20px 0px", textAlign: "center", margin: "0px -11px" }}>
                    <span style={{ color: "green" }}>
                        <FontAwesomeIcon icon={faCheckCircle} />
                    </span>
                    <span style={{ fontWeight: "bold" }}>Sản phẩm vừa được thêm giỏ hàng</span>
                </div>
                <div style={{ maxHeight: "300px", overflow: "auto" }}>
                    {productList?.map((item, index) => {
                        return (
                            <div key={uuidv4()}>
                                <CartItem data={item}></CartItem>
                            </div>
                        )
                    })}
                </div>
                <hr />
                <div className="cart_total_price">
                    <span>{format_d_currency(cartData.totalPrice)}</span>
                </div>
                <div style={{ textAlign: "right", margin: "10px 0px" }}>
                    <Link href="/cart" passHref>
                        <span className="btn-gray">Tới giỏ hàng</span>
                    </Link>
                    <span className="btn-red">Tiến hành thanh toán</span>
                </div>
            </div>
        </ModalLayout>
    )
}
