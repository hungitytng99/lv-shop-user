import Footer from "./footer/Footer"
import Header from "./header/Header"
import Sidebar from "./sidebar/Sidebar"
import { useEffect } from "react"
import { categoryService } from "../../services/category/index"
import { useDispatch } from "react-redux"
import { saveMenuData } from "src/redux/slices/menuSlice"
import { getProductCart } from "./../../redux/slices/cartSlices"
import ModalReviewProduct from "src/components-share/Modal/ModalReviewProduct/ModalReviewProduct"
import ModalReviewCart from "src/components-share/Modal/ModalReviewCart/ModalReviewCart"
function Layout(props) {
    const { children, titlePage, breadcrumb } = props
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProductCart())
        ;(async () => {
            const category = await categoryService.listCategory()
            console.log(category)
            dispatch(saveMenuData(category))
        })()
    }, [])
    return (
        <div className="layout">
            <div className="layout__header">
                <Header titlePage={titlePage} breadcrumb={breadcrumb} />
            </div>
            <div className="layout__sidebar">
                <input type="checkbox" id="toggle_sidebar" />
                <Sidebar />
                <label className="label_sidebar" htmlFor="toggle_sidebar"></label>
            </div>
            <div className="layout__content">{children}</div>
            <div className="layout__footer">
                <Footer />
            </div>
            <ModalReviewProduct />
            <ModalReviewCart />
        </div>
    )
}
export default Layout
