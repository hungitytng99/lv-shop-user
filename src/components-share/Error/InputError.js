import React from "react";
import { InputState } from "./../../constants/InputState";

export default function InputError(props) {
    const { errorCode } = props;

    if (errorCode === InputState.EMPTY) return <div style={{ color: "red", fontSize: "smaller" }}>*Trường này không thể để trống!</div>;
    if (errorCode === InputState.EMAIL_INVALID) return <div style={{ color: "red", fontSize: "smaller" }}>*Email không hợp lệ!</div>;
    if (errorCode === InputState.WRONG_PASSWORD) return <div style={{ color: "red", fontSize: "smaller" }}>Mật khẩu không đúng!</div>;
    if (errorCode === InputState.USER_NOT_FOUND) return <div style={{ color: "red", fontSize: "smaller" }}>Tài khoản không tồn tại!</div>;
    if (errorCode === InputState.EMAIL_REGISTER_EXIST) return <div style={{ color: "red", fontSize: "smaller" }}>Email đã được dùng đăng kí!</div>;
    return <></>;
}
