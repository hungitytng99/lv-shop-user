import React from "react"
import CartItem from "./../../Cart/cart_item/CartItem"
import { Container } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import ModalLayout from "../ModalLayout"
export default function ModalReviewCart(props) {
    const { isOpen, data, closeModalEvent } = props
    function closeModal() {
        closeModalEvent()
    }
    return (
        <ModalLayout isOpen={isOpen} closeModalEvent={() => closeModalEvent()}>
            <CartItem data={data} />
            <CartItem data={data} />
            <CartItem data={data} />
            <CartItem data={data} />
            <CartItem data={data} />
            <CartItem data={data} />
        </ModalLayout>
    )
}
