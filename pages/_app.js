import "bootstrap/dist/css/bootstrap.css";
import "normalize.css";
import "src/assets/css/globals.scss";
import dynamic from "next/dynamic";
import "nprogress/nprogress.css";
import { Provider } from "react-redux";
import store from "src/redux/store";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { userService } from "src/services/user";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import { storageKey } from "src/constants/storageKeys";
import { REQUEST_STATE } from "src/app-configs";
// Dùng để tạo loading khi chuyển route
const TopProgressBar = dynamic(
    () => {
        return import("src/components-share/TopProgressBar/TopProgressBar");
    },

    { ssr: false }
);

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        (async () => {
            if (Cookies.get(storageKey.Cookie_token)) {
                // const response = await userService.getUserInforByToken();
                // return response;
            } else {
                const fpPromise = FingerprintJS.load();
                const fp = await fpPromise;
                const result = await fp.get();
                const visitorId = result.visitorId;

                const response = await userService.registerByDevice({ deviceId: visitorId });

                if (response.state === REQUEST_STATE.SUCCESS) Cookies.set(storageKey.Cookie_token, response.data.token);

                return response;
            }
        })();
    });

    return (
        <Provider store={store}>
            <TopProgressBar />
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
