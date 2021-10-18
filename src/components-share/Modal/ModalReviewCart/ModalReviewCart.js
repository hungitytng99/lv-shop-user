import React from "react"
import CartItem from "./../../Cart/cart_item/CartItem"
import { Container } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
export default function ModalReviewCart(props) {
    const { isOpen, data, closeModalEvent } = props
    function closeModal() {
        closeModalEvent()
    }
    return (
        <div className="modal_custom" style={{ display: isOpen ? "block" : "none" }}>
            <div className="modal_custom-background" onClick={closeModal}>
                <Container className="modal_custom-content">
                    <span onClick={closeModal} className="modal_custom-close">
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
                    <div className="main_content">
                        <CartItem data={data} />
                    </div>
                </Container>
            </div>
        </div>
    )
}
