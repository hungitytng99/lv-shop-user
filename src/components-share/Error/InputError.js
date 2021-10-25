import React from "react"
import { InputState } from "./../../constants/InputState"

export default function InputError(props) {
    const { errorCode } = props

    if (errorCode === InputState.EMPTY) return <div style={{ color: "red", fontSize: "smaller" }}>*Trường này không thể để trống!</div>
    if (errorCode === InputState.EMAIL_INVALID) return <div style={{ color: "red", fontSize: "smaller" }}>*Email không hợp lệ!</div>
    // if (errorCode === InputState.EMPTY) return <div style={{ color: "red", fontSize: "smaller" }}>Trường này không thể để trống!</div>

    return <></>
}
