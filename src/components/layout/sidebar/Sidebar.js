import React from "react"
import { ImagesPath } from "../../../constants/ImagesPath"
import Link from "next/link"
import { danhmuc } from "../../../constants/danhmuc"
import { useSelector } from "react-redux"

export default function Sidebar() {
    const subMenu = useSelector((stores) => stores.menuSlice.value)
    return (
        <div className="sidebar">
            <div className="sidebar-logo">
                <img src={ImagesPath.LOGO}></img>
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
                            )
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
                <Link href="/dang-nhap/#dangnhap" passHref>
                    <li>
                        <span>Đăng nhập</span>
                    </li>
                </Link>
                <Link href="/dang-ky/#dangky" passHref>
                    <li>
                        <span>Đăng kí</span>
                    </li>
                </Link>
                <Link href="#" passHref>
                    <li>
                        <span>Tài khoản</span>
                    </li>
                </Link>

                <li>
                    <span>Đăng xuất</span>
                </li>
            </ul>
        </div>
    )
}
