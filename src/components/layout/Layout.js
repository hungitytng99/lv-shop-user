import { Container } from "react-bootstrap"
import Footer from "components/Layout/Footer/Footer"
import Header from "components/Layout/Header/Header"
import Sidebar from "./Sidebar/Sidebar"

function Layout(props) {
    const { children, titlePage, breadcrumb } = props
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
        </div>
    )
}
export default Layout
