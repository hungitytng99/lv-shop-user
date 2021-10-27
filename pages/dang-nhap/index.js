import React, { useEffect, useRef, useState } from "react"
import Layout from "./../../src/components/layout/Layout"
import { Container } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faGooglePlus } from "@fortawesome/free-brands-svg-icons"
import Link from "next/dist/client/link"
import { InputState } from "../../src/constants/InputState"
import InputError from "src/components-share/Error/InputError"
import { userService } from "./../../src/services/user/index"
import { useDispatch } from "react-redux"
import { userLogin } from "./../../src/redux/slices/userSlice"

export default function Login() {
    const breadcrumb = [
        {
            title: "Đăng nhập",
            url: "/dang-nhap",
        },
    ]
    const dispatch = useDispatch()
    const [emailState, setEmailState] = useState(InputState.VALID)
    const [passwordState, setPasswordState] = useState(InputState.VALID)

    const emailRef = useRef("")
    const passwordRef = useRef("")

    function checkEmail() {
        if (emailRef.current.value === "") {
            emailRef.current.style.border = "1px solid red"
            setEmailState(InputState.EMPTY)
            return false
        }
        return true
    }

    function checkPasswork() {
        if (passwordRef.current.value === "") {
            passwordRef.current.style.border = "1px solid red"
            setPasswordState(InputState.EMPTY)
            return false
        }
        return true
    }
    function dangnhapSubmit() {
        let checkSumit = checkEmail()
        checkSumit = checkPasswork() && checkSumit
        if (checkSumit) {
            const dataPost = {
                email: emailRef.current.value,
                password: passwordRef.current.value,
            }
            dispatch(userLogin(dataPost))
        }
    }
    function clearState(e, clearError) {
        e.target.style.border = "1px solid #bbbbbb"
        clearError()
    }
    return (
        <div>
            <Layout titlePage="Đăng nhập tài khoản" breadcrumb={breadcrumb}>
                <Container>
                    <div id="dangnhap" className="login_page">
                        <h4 className="login_page-title">Đăng nhập</h4>
                        <div className="login_page-social_login">
                            <span className="icon_social facebook user-not-selected">
                                <FontAwesomeIcon icon={faFacebook} /> Facebook
                            </span>
                            <span className="icon_social google user-not-selected">
                                <FontAwesomeIcon icon={faGooglePlus} /> Google
                            </span>
                        </div>

                        <InputError errorCode={emailState} />
                        <input
                            ref={emailRef}
                            onFocus={(e) => clearState(e, () => setEmailState(InputState.VALID))}
                            className="input_data"
                            name="email"
                            type="email"
                            placeholder="Email"
                        />

                        <InputError errorCode={passwordState} />
                        <input
                            ref={passwordRef}
                            onFocus={(e) => clearState(e, () => setPasswordState(InputState.VALID))}
                            className="input_data"
                            name="password"
                            type="password"
                            placeholder="Mật khẩu"
                        />
                        <div className="btn-login user-not-selected" onClick={dangnhapSubmit}>
                            Đăng nhập
                        </div>
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
