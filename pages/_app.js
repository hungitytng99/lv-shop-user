import "bootstrap/dist/css/bootstrap.css"
import "normalize.css"
import "src/assets/css/globals.scss"
import dynamic from "next/dynamic"
import "nprogress/nprogress.css"
import { Provider } from "react-redux"
import store from "src/redux/store"

// Dùng để tạo loading khi chuyển route
const TopProgressBar = dynamic(
    () => {
        return import("src/components-share/TopProgressBar/TopProgressBar")
    },
    { ssr: false }
)

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <TopProgressBar />
            <Component {...pageProps} />
        </Provider>
    )
}

export default MyApp
