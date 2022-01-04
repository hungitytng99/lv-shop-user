import React, { useEffect, useRef, useState } from "react";
import Layout from "src/components/layout/Layout";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGooglePlus } from "@fortawesome/free-brands-svg-icons";
import Link from "next/dist/client/link";
import InputError from "src/components-share/Error/InputError";
import Head from "next/head";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { REQUEST_STATE } from "src/app-configs";
import { userService } from "./../../src/services/user/index";
import { InputState } from "../../src/constants/InputState";

export default function SignUp() {
    const userData = useSelector((stores) => stores.userSlice.value);
    const router = useRouter();
    if (userData.data?.deviceId == null && userData.state != REQUEST_STATE.ERROR) router.push("/");
    const breadcrumb = [
        {
            title: "Đăng ký",
            url: "/dang-ky",
        },
    ];
    const [nameState, setNameState] = useState(InputState.VALID);
    const [emailState, setEmailState] = useState(InputState.VALID);
    const [phoneState, setPhoneState] = useState(InputState.VALID);
    const [passwordState, setPasswordState] = useState(InputState.VALID);

    const nameRef = useRef("");
    const emailRef = useRef("");
    const phoneRef = useRef("");
    const passwordRef = useRef("");

    function checkName() {
        if (nameRef.current.value === "") {
            nameRef.current.style.border = "1px solid red";
            setNameState(InputState.EMPTY);
            return false;
        }
        return true;
    }
    function checkEmail() {
        if (emailRef.current.value === "") {
            emailRef.current.style.border = "1px solid red";
            setEmailState(InputState.EMPTY);
            return false;
        }
        return true;
    }
    function checkPhone() {
        if (phoneRef.current.value === "") {
            phoneRef.current.style.border = "1px solid red";
            setPhoneState(InputState.EMPTY);
            return false;
        }
        return true;
    }
    function checkPasswork() {
        if (passwordRef.current.value === "") {
            passwordRef.current.style.border = "1px solid red";
            setPasswordState(InputState.EMPTY);
            return false;
        }
        return true;
    }
    async function dangkySubmit() {
        let checkSubmit = checkName();
        checkSubmit = checkEmail() && checkSubmit;
        checkSubmit = checkPhone() && checkSubmit;
        checkSubmit = checkPasswork() && checkSubmit;
        if (checkSubmit) {
            const dataPost = {
                name: nameRef.current.value,
                email: emailRef.current.value,
                phone: phoneRef.current.value,
                password: passwordRef.current.value,
            };
            const response = await userService.register(dataPost);
            if (response.state === REQUEST_STATE.SUCCESS) {
                alert("Đăng kí thành công!\nĐăng nhập và mua sắm nào!");
                router.push("/dang-nhap");
            }
            if (response.state === REQUEST_STATE.ERROR) {
                if (response?.error?.message === InputState.EMAIL_REGISTER_EXIST) setEmailState(InputState.EMAIL_REGISTER_EXIST);
            }
        }
    }
    function clearState(e, clearError) {
        e.target.style.border = "1px solid #bbbbbb";
        clearError();
    }
    return (
        <>
            <Head>
                <title>{breadcrumb[0].title}</title>
            </Head>
            <Layout titlePage="Đăng ký tài khoản" breadcrumb={breadcrumb}>
                <Container>
                    <div id="dangky" className="login_page">
                        <h4 className="login_page-title">Đăng ký</h4>
                        <div className="login_page-social_login">
                            <span className="icon_social facebook user-not-selected">
                                <FontAwesomeIcon icon={faFacebook} /> Facebook
                            </span>
                            <span className="icon_social google user-not-selected">
                                <FontAwesomeIcon icon={faGooglePlus} /> Google
                            </span>
                        </div>
                        <InputError errorCode={nameState} />
                        <input
                            ref={nameRef}
                            onFocus={(e) => clearState(e, () => setNameState(InputState.VALID))}
                            className="input_data"
                            name="name"
                            type="text"
                            placeholder="Họ và tên"
                        />
                        <InputError errorCode={emailState} />
                        <input
                            ref={emailRef}
                            onFocus={(e) => clearState(e, () => setEmailState(InputState.VALID))}
                            className="input_data"
                            name="email"
                            type="email"
                            placeholder="Email"
                        />
                        <InputError errorCode={phoneState} />
                        <input
                            ref={phoneRef}
                            onFocus={(e) => clearState(e, () => setPhoneState(InputState.VALID))}
                            className="input_data"
                            name="phone"
                            type="tel"
                            placeholder="Số điện thoại"
                        />
                        <InputError errorCode={passwordState} />
                        <input
                            ref={passwordRef}
                            onFocus={(e) => clearState(e, () => setPasswordState(InputState.VALID))}
                            className="input_data"
                            type="password"
                            placeholder="Mật khẩu"
                        />
                        <div className="btn-login user-not-selected" onClick={dangkySubmit}>
                            Đăng ký
                        </div>
                        <div style={{ textAlign: "center", margin: "20px 0px" }}>
                            Bạn đã có tài khoản?{" "}
                            <Link href="/dang-nhap/#dangnhap" passHref>
                                <a> Đăng nhập! </a>
                            </Link>
                        </div>
                    </div>
                </Container>
            </Layout>
        </>
    );
}

// SignUp.getInitialProps = async (context) => {
//     const { asPath, query, params } = context;
//     try {
//         return {};
//     } catch (error) {
//         console.log(error);
//         return {
//             notFound: true,
//         };
//     }
// };
