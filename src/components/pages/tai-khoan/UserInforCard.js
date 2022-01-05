import { faCheckCircle, faTimes, faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/dist/client/link";
import { useRef } from "react";
import { userUpdateInfor } from "./../../../redux/slices/userSlice";
import { userService } from "./../../../services/user/index";
import { REQUEST_STATE } from "src/app-configs";
import { saveUserData } from "src/redux/slices/userSlice";
import { apiUploadImg } from "src/api/user";

export default function UserInforCard() {
    const userData = useSelector((stores) => stores.userSlice.value);
    const [editState, setEditState] = useState(false);
    const [alertBox, setAlertBox] = useState({ open: false, type: "success", content: "", icon: faCheckCircle });
    const nameRef = useRef();
    const phoneRef = useRef();
    const dispatch = useDispatch();
    function getImageUpload(e) {
        const file = e.target.files[0];
        // console.log(file);
        uploadImg(file);
    }

    async function saveChangeUserinfor() {
        const dataPost = {
            name: nameRef.current.value,
            phone: phoneRef.current.value,
        };
        const response = await userService.updateInfor(dataPost);
        setEditState(false);
        if (response.state === REQUEST_STATE.SUCCESS) {
            setAlertBox({ open: true, type: "success", content: "Cập nhật thành công!", icon: faCheckCircle });
            setTimeout(() => {
                setAlertBox({ open: false, type: "success", content: "Cập nhật thành công!", icon: faCheckCircle });
            }, 1500);

            dispatch(saveUserData(response));
        } else {
            setAlertBox({ open: true, type: "error", content: "Có lỗi xảy ra!", icon: faTimes });
            setTimeout(() => {
                setAlertBox({ open: false, type: "error", content: "Có lỗi xảy ra!", icon: faTimes });
            }, 1500);
        }
    }

    async function uploadImg(file) {
        const res = await userService.uploadImg(file);
        // console.log(res);
        if (res.state === REQUEST_STATE.SUCCESS) {
            const response = await userService.updateInfor({ avatar: res.data[0].id });
            if (response.state === REQUEST_STATE.SUCCESS) {
                setAlertBox({ open: true, type: "success", content: "Cập nhật thành công!", icon: faCheckCircle });
                setTimeout(() => {
                    setAlertBox({ open: false, type: "success", content: "Cập nhật thành công!", icon: faCheckCircle });
                }, 1500);

                dispatch(saveUserData(response));
            } else {
                setAlertBox({ open: true, type: "error", content: "Có lỗi xảy ra!", icon: faTimes });
                setTimeout(() => {
                    setAlertBox({ open: false, type: "error", content: "Có lỗi xảy ra!", icon: faTimes });
                }, 1500);
            }
        } else {
            setAlertBox({ open: true, type: "error", content: "Có lỗi xảy ra!", icon: faTimes });
            setTimeout(() => {
                setAlertBox({ open: false, type: "error", content: "Có lỗi upload xảy ra!", icon: faTimes });
            }, 1500);
        }
    }

    return (
        <div className="information_card">
            <div className="avatar-wrapper">
                <div className="avatar">
                    {userData.data.avatar ? (
                        <img className="user_img avatar" src={`${process.env.NEXT_PUBLIC_IMG_BASE_URL}/${userData.data.avatar}`} />
                    ) : (
                        <span className="avatar user_no_img content_center">{userData.data.name ? userData.data.name[0] : ""}</span>
                    )}
                </div>
                <div className="content_center upload_button avatar" title="Upload new image">
                    <span className="icon_img_upload">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-card-image" viewBox="0 0 16 16">
                            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                            <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z" />
                        </svg>
                    </span>
                </div>
                <input className="input_file_upload avatar" type="file" accept="image/*" onChange={(e) => getImageUpload(e)} />
            </div>
            <div className="information">
                {editState ? (
                    <input
                        ref={nameRef}
                        type="text"
                        style={{ width: "100%", padding: "5px 10px", border: "1px solid #2196f3", outline: "none", borderRadius: "5px" }}
                        name="name"
                        className="mb-3"
                        defaultValue={userData.data.name}
                    />
                ) : (
                    <p style={{ textTransform: "capitalize" }}>{userData.data.name}</p>
                )}

                {editState ? (
                    <input
                        ref={phoneRef}
                        type="tel"
                        style={{ width: "100%", padding: "5px 10px", border: "1px solid #2196f3", outline: "none", borderRadius: "5px" }}
                        name="phone"
                        defaultValue={userData.data.phone}
                    />
                ) : (
                    <p style={{ textTransform: "capitalize" }}>{userData.data.phone}</p>
                )}

                <p style={{}}>{userData.data.email}</p>
                <div style={{ marginTop: "20px", textAlign: "right" }}>
                    {editState ? (
                        <span className="edit_btn" onClick={() => saveChangeUserinfor()}>
                            <span>Save</span>
                        </span>
                    ) : (
                        <span className="edit_btn" onClick={() => setEditState(true)}>
                            <FontAwesomeIcon icon={faUserEdit} style={{ marginRight: "10px" }} />
                            <span>Chỉnh sửa</span>
                        </span>
                    )}

                    <Link href="/tai-khoan/doi-mat-khau" passHref>
                        <span style={{ display: "block", fontSize: "14px", marginTop: "20px", cursor: "pointer" }}>Đổi mật khẩu ?</span>
                    </Link>
                </div>
            </div>
            <div className={`alert_box ${alertBox.type}`} style={{ top: alertBox.open ? "50px" : "-100px" }}>
                <div className="alert_content">
                    <span>
                        <FontAwesomeIcon icon={alertBox.icon} />
                    </span>
                    <span style={{ marginLeft: "15px" }}>{alertBox.content}</span>
                </div>
            </div>
        </div>
    );
}
