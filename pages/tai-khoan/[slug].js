import React, { useRef, useState } from "react";
import Layout from "src/components/layout/Layout";
import { Container, Button } from "react-bootstrap";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { InputState } from "./../../src/constants/InputState";
import InputError from "./../../src/components-share/Error/InputError";
import { userService } from "./../../src/services/user/index";
import { REQUEST_STATE } from "src/app-configs";
import { useRouter } from "next/router";

export default function changePass(props) {
    const breadcrumb = [
        {
            title: "Thông tin tài khoản",
            url: "/tai-khoan",
        },
        {
            title: "Đổi mật khẩu",
            url: "/tai-khoan/doi-mat-khau",
        },
    ];
    const router = useRouter();
    const [oldPassState, setOldPassState] = useState(InputState.VALID);
    const [newPassState, setNewPassState] = useState(InputState.VALID);

    const oldPass = useRef();
    const newPass = useRef();
    function checkOldPasswork() {
        if (oldPass.current.value === "") {
            oldPass.current.style.border = "1px solid red";
            setOldPassState(InputState.EMPTY);
            return false;
        }
        return true;
    }
    function checkNewPasswork() {
        if (newPass.current.value === "") {
            newPass.current.style.border = "1px solid red";
            setNewPassState(InputState.EMPTY);
            return false;
        }
        return true;
    }
    function clearState(e, clearError) {
        e.target.style.border = "1px solid #bbbbbb";
        clearError();
    }
    async function submit() {
        let checkSubmit = checkOldPasswork();
        checkSubmit = checkNewPasswork() && checkSubmit;
        if (checkSubmit) {
            const dataPost = {
                oldPassword: oldPass.current.value,
                newPassword: newPass.current.value,
            };
            console.log("submit newpass", dataPost);
            const response = await userService.changePassword(dataPost);
            if (response.state === REQUEST_STATE.SUCCESS) {
                alert("Đổi mật khẩu thành công!");
                router.push("/tai-khoan");
            }
            if (response.state === REQUEST_STATE.ERROR) {
                if (response?.error?.message === InputState.WRONG_PASSWORD) setOldPassState(InputState.WRONG_PASSWORD);
                if (response?.error?.message === InputState.USER_NOT_FOUND) setEmailState(InputState.USER_NOT_FOUND);
            }
        }
    }
    return (
        <div>
            <Layout titlePage={breadcrumb[1].title} breadcrumb={breadcrumb}>
                <Container className="gioi_thieu">
                    <div style={{ maxWidth: "450px", margin: "30px auto", background: "rgba(228,228,228,1)", padding: "20px", borderRadius: "5px", boxShadow: "3px 3px 3px #ccc" }}>
                        <div style={{ display: "flex", textAlign: "center", justifyContent: "center", margin: "0px 0px 20px 0px" }}>
                            <span style={{ marginRight: "15px" }}>
                                <FontAwesomeIcon icon={faLock} />
                            </span>
                            <b>Đổi mật khẩu</b>
                        </div>
                        <hr style={{ background: "#009688" }} />

                        <div>
                            <p>Nhập mật khẩu cũ:</p>
                            <InputError errorCode={oldPassState} />

                            <input
                                ref={oldPass}
                                type="password"
                                onFocus={(e) => clearState(e, () => setOldPassState(InputState.VALID))}
                                name="oldpassword"
                                style={{ width: "100%", padding: "5px 10px", border: "1px solid #2196f3", outline: "none", borderRadius: "5px" }}
                            />
                            <br />
                            <p>Nhập mật khẩu mới:</p>
                            <InputError errorCode={newPassState} />

                            <input
                                ref={newPass}
                                onFocus={(e) => clearState(e, () => setNewPassState(InputState.VALID))}
                                type="password"
                                name="newpassword"
                                style={{ width: "100%", padding: "5px 10px", border: "1px solid #2196f3", outline: "none", borderRadius: "5px" }}
                            />
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                            <Link href="/tai-khoan" passHref>
                                <Button variant="light">Quay lại</Button>
                            </Link>
                            <Button onClick={submit}>Submit</Button>
                        </div>
                    </div>
                </Container>
            </Layout>
        </div>
    );
}

export async function getServerSideProps(context) {
    const { resolvedUrl, query, params } = context;
    try {
        console.log({ resolvedUrl, query, params });
        return {
            props: {},
        };
    } catch (error) {
        return {
            notFound: true,
        };
    }
}
