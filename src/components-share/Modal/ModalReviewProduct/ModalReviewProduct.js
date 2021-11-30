import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import ModalLayout from "../ModalLayout"

import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { closeProductModal } from "src/redux/slices/modalProductSlice"
import ProductDetail from "src/components/pages/san-pham/chi-tiet-san-pham/ProductDetail"

export default function ModalReviewProduct(props) {
    const modalProductSlice = useSelector((stores) => stores.modalProductSlice)
    const { open = false, product, loading } = modalProductSlice
    const dispatch = useDispatch()

    function closeModalEvent() {
        dispatch(closeProductModal())
    }
    return (
        <ModalLayout isOpen={open} closeModalEvent={() => closeModalEvent()}>
            <ProductDetail product={product} />
        </ModalLayout>
    )
}
