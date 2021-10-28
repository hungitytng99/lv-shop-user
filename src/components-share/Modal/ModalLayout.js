import React from "react"
import { Container } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
export default function ModalLayout(props) {
    const { isOpen, closeModalEvent, children } = props
    function closeModal() {
        closeModalEvent()
    }
    return (
        <div className="modal_custom" style={{ display: isOpen ? "block" : "none" }}>
            <div className="modal_custom-background" onClick={closeModal}></div>
            <Container className="modal_custom-content">
                <span onClick={closeModal} className="modal_custom-close">
                    <FontAwesomeIcon icon={faTimes} />
                </span>
                <Container className="main_content">{children}</Container>
            </Container>
        </div>
    )
}
