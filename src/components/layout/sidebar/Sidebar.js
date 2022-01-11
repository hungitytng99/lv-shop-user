import React from "react";
import { ImagesPath } from "../../../constants/ImagesPath";
import Link from "next/link";
import { useSelector } from "react-redux";
import Image from "next/dist/client/image";
import { REQUEST_STATE } from "../../../app-configs";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { userLogout } from "../../../redux/slices/userSlice";

export default function Sidebar() {
    const subMenu = useSelector((stores) => stores.menuSlice.value);
    const userData = useSelector((stores) => stores.userSlice.value);
    const dispatch = useDispatch();
    const router = useRouter();
    let isUser = false;
    if (userData.data?.deviceId == null && userData.state != REQUEST_STATE.ERROR) isUser = true;

    function clickLogOut() {
        dispatch(userLogout());
        if (router.asPath == "/") {
            router.reload("/");
        } else {
            router.push("/");
        }
    }
    return (
        <div className="sidebar">
            <div className="sidebar-logo" style={{ textAlign: "center" }}>
                <Image width={90} height={90} src={ImagesPath.LOGO}></Image>
            </div>
            <ul>
                <Link href="/" passHref>
                    <li>
                        <span>Trang chủ</span>
                    </li>
                </Link>
                <Link href="/gioi-thieu" passHref>
                    <li>
                        <span>Giới thiệu</span>
                    </li>
                </Link>

                <li className="multichoice">
                    <Link href="/san-pham/all" passHref>
                        <span>Sản phẩm</span>
                    </Link>
                    <input id="toggle_submenu_sidebar" type="checkbox" style={{ display: "none" }} />
                    <label htmlFor="toggle_submenu_sidebar"></label>
                    <ul style={{ "--i": subMenu.data?.length || 0 }}>
                        {subMenu.data?.map((item, index) => {
                            return (
                                <Link key={"Sidebar" + index} href={item.urlPage} passHref>
                                    <li>
                                        <span>{item.title}</span>
                                    </li>
                                </Link>
                            );
                        })}
                    </ul>
                </li>

                <Link href="/tin-tuc" passHref>
                    <li>
                        <span>Tin tức</span>
                    </li>
                </Link>
                <Link href="/lien-he" passHref>
                    <li>
                        <span>Liên hệ</span>
                    </li>
                </Link>

                {isUser ? (
                    <>
                        <Link href="/tai-khoan" passHref>
                            <li>
                                <span>Tài khoản</span>
                            </li>
                        </Link>
                        <li onClick={clickLogOut}>
                            <span>Đăng xuất</span>
                        </li>
                    </>
                ) : (
                    <>
                        <Link href="/dang-nhap" passHref>
                            <li>
                                <span>Đăng nhập</span>
                            </li>
                        </Link>
                        <Link href="/dang-ky" passHref>
                            <li>
                                <span>Đăng kí</span>
                            </li>
                        </Link>
                    </>
                )}
            </ul>
        </div>
    );
}
