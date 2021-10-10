import Layout from "components/layout/Layout"
import Head from "next/head"
import Image from "next/image"
import { ImagesPath } from "../src/constants/ImagesPath"

export default function Home() {
    return (
        <>
            <Head>
                <title>Trang chủ</title>
            </Head>
            <Layout>
                Đây là Trang home
                <Image src={ImagesPath.banner3} />
            </Layout>
        </>
    )
}
