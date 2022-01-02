import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/dist/client/link";

export default function UserInforCard() {
    const userData = useSelector((stores) => stores.userSlice.value);
    const [editState, setEditState] = useState(false);
    function getImageUpload(e) {
        const file = e.target.files[0];
        console.log(file);
    }

    return (
        <div className="information_card">
            <div className="avatar-wrapper">
                <div className="avatar">
                    <span className="avatar user_no_img content_center">{userData.data.name ? userData.data.name[0] : ""}</span>
                    {userData.data.avatar ? <img className="user_img avatar" src={userData.data.avatar} /> : null}
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
                {editState ? <input type="text" name="name" defaultValue={userData.data.name} /> : <p style={{ textTransform: "capitalize" }}>{userData.data.name}</p>}

                <p style={{}}>{userData.data.email}</p>
                <div style={{ marginTop: "20px", textAlign: "right" }}>
                    {editState ? (
                        <span className="edit_btn" onClick={() => setEditState(false)}>
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
        </div>
    );
}
