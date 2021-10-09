import "bootstrap/dist/css/bootstrap.css";
import "normalize.css";
import "assets/css/globals.sass"
import dynamic from "next/dynamic";
import "nprogress/nprogress.css";

// Dùng để tạo loading khi chuyển route
const TopProgressBar = dynamic(
  () => {
    return import("components-share/TopProgressBar/TopProgressBar");
  },
  { ssr: false }
);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <TopProgressBar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
