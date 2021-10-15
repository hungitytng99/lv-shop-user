import React from "react"
import Layout from "./../../src/components/layout/Layout"
import { Container } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faGooglePlus } from "@fortawesome/free-brands-svg-icons"
import Link from "next/dist/client/link"
export default function Login() {
    const breadcrumb = [
        {
            title: "Đăng nhập",
            url: "/dang-nhap",
        },
    ]
    return (
        <div>
            <Layout titlePage="Đăng nhập tài khoản" breadcrumb={breadcrumb}>
                <Container>
                    <div id="dangnhap" className="login_page">
                        <h4 className="login_page-title">Đăng nhập</h4>
                        <div className="login_page-social_login">
                            <span className="icon_social facebook">
                                <FontAwesomeIcon icon={faFacebook} /> Facebook
                            </span>
                            <span className="icon_social google">
                                <FontAwesomeIcon icon={faGooglePlus} /> Google
                            </span>
                        </div>
                        <input className="input_data" type="email" placeholder="Email"></input>
                        <input className="input_data" type="password" placeholder="Mật khẩu"></input>
                        <div className="btn-login">Đăng nhập</div>
                        <div style={{ textAlign: "center", margin: "20px 0px" }}>
                            Bạn chưa có tài khoản?{" "}
                            <Link href="/dang-ky/#dangky" passHref>
                                <a> Đăng ký ngay! </a>
                            </Link>
                        </div>
                    </div>
                </Container>
            </Layout>
        </div>
    )
}
