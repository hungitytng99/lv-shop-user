import Footer from "./footer/Footer";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ModalReviewProduct from "src/components-share/Modal/ModalReviewProduct/ModalReviewProduct";
import ModalReviewCart from "src/components-share/Modal/ModalReviewCart/ModalReviewCart";
import { getVisitorInformation } from "./../../redux/slices/userSlice";
import { getMenu } from "./../../redux/slices/menuSlice";
import { getProductCart } from "./../../redux/slices/cartSlices";
import { getShopInfor } from "./../../redux/slices/shopSlice";
import Contact from "./contact/Contact";

function Layout(props) {
    const { children, titlePage, breadcrumb } = props;
    const dispatch = useDispatch();
    useEffect(() => {
        (async () => {
            await dispatch(getVisitorInformation());
            dispatch(getShopInfor());
            dispatch(getMenu());
            dispatch(getProductCart());
        })();
    }, []);

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
            <Contact />
            <ModalReviewProduct />
            <ModalReviewCart />
        </div>
    );
}
export default Layout;
