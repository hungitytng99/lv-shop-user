import React from "react"
import Layout from "./../../src/components/layout/Layout"
import { Container } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faGooglePlus } from "@fortawesome/free-brands-svg-icons"
import Link from "next/dist/client/link"

export default function SignUp() {
    const breadcrumb = [
        {
            title: "Đăng ký",
            url: "/dang-ky",
        },
    ]
    return (
        <div>
            <Layout titlePage="Đăng nhập tài khoản" breadcrumb={breadcrumb}>
                <Container>
                    <div id="dangky" className="login_page">
                        <h4 className="login_page-title">Đăng ký</h4>
                        <div className="login_page-social_login">
                            <span className="icon_social facebook">
                                <FontAwesomeIcon icon={faFacebook} /> Facebook
                            </span>
                            <span className="icon_social google">
                                <FontAwesomeIcon icon={faGooglePlus} /> Google
                            </span>
                        </div>
                        <input className="input_data" type="text" placeholder="Họ và tên"></input>
                        <input className="input_data" type="email" placeholder="Email"></input>
                        <input className="input_data" type="tel" placeholder="Số điện thoại"></input>
                        <input className="input_data" type="password" placeholder="Mật khẩu"></input>
                        <div className="btn-login">Đăng ký</div>
                        <div style={{ textAlign: "center", margin: "20px 0px" }}>
                            Bạn đã có tài khoản?{" "}
                            <Link href="/dang-nhap/#dangnhap" passHref>
                                <a> Đăng nhập! </a>
                            </Link>
                        </div>
                    </div>
                </Container>
            </Layout>
        </div>
    )
}
