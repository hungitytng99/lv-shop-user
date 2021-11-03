import React, { useState } from "react"
import { Breadcrumb, Container } from "react-bootstrap"
import Link from "next/link"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faCaretDown, faSearch } from "@fortawesome/free-solid-svg-icons"
import { ImagesPath } from "src/constants/ImagesPath"
import { danhmuc } from "src/constants/danhmuc"
import { useRouter } from "next/router"
import SwitchLoginLogout from "./login-out/SwitchLoginLogout"
import { useSelector } from "react-redux"

export default function Header(props) {
    const route = useRouter().route
    const { titlePage, breadcrumb } = props
    const subMenu = useSelector((stores) => stores.menuSlice.value)
    return (
        <header className="header">
            <Container>
                <div className="header-top">
                    <div className="contact">
                        <Link href={{ pathname: "tel:0962020446" }} passHref>
                            <a className="contact-item">
                                <div className="contact-item-icon">
                                    <Image src={ImagesPath.phoneIcon} alt="phone" />
                                </div>
                                <div className="contact-item-title">0962.020.446</div>
                            </a>
                        </Link>
                        <Link href={{ pathname: "mailto:sales@giangminhviet.com" }} passHref>
                            <a target="_blank" data-tip="Mail: sales@giangminhviet.com" className="contact-item">
                                <div className="contact-item-icon">
                                    <Image src={ImagesPath.emailIcon} alt="phone" />
                                </div>
                                <div className="contact-item-title">manhremvuonghong@gmail.com</div>
                            </a>
                        </Link>
                        <Link href={{ pathname: "mailto:sales@giangminhviet.com" }} passHref>
                            <a style={{ float: "right" }} target="_blank" data-tip="Mail: sales@giangminhviet.com" className="contact-item">
                                <div className="contact-item-icon">
                                    <Image src={ImagesPath.listIcon} alt="phone" />
                                </div>
                                <div className="contact-item-title">Kiểm tra đơn hàng</div>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="header-mid">
                    <div className="header-mid-search">
                        <input type="text" placeholder="Tìm kiếm sản phẩm..."></input>
                        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                    </div>
                    <div className="header-mid-toggle_menu_btn">
                        <label htmlFor="toggle_sidebar">
                            <FontAwesomeIcon icon={faBars} />
                        </label>
                    </div>
                    <div className="header-mid-logo">
                        <img src={ImagesPath.LOGO}></img>
                    </div>
                    <SwitchLoginLogout />
                </div>
            </Container>
            <div className="header-bottom-search">
                <div>
                    <input type="text" placeholder="Tìm kiếm sản phẩm..."></input>
                    <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                </div>
            </div>
            <div className="header-bottom-menu">
                <div>
                    <Link href="/" passHref>
                        <div className={route === "/" ? "active" : ""}>Trang chủ</div>
                    </Link>
                    <Link href="/gioi-thieu" passHref>
                        <div className={route === "/gioi-thieu" ? "active" : ""}>Giới thiệu</div>
                    </Link>
                    <div className={route.includes("/san-pham") ? "multi_choice active" : "multi_choice"}>
                        <Link href="/san-pham/all" passHref>
                            <div>
                                <span style={{ marginRight: "10px" }}>Sản phẩm</span>
                                <FontAwesomeIcon icon={faCaretDown} />
                            </div>
                        </Link>
                        <div className="list_choice">
                            {subMenu.data?.map((item, index) => {
                                return (
                                    <Link key={"danhmucmenu" + index} href={item.urlPage}>
                                        <span>{item.title}</span>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                    <Link href="/tin-tuc" passHref>
                        <div className={route === "/tin-tuc" ? "active" : ""}>Tin tức</div>
                    </Link>
                    <Link href="/lien-he" passHref>
                        <div className={route === "/lien-he" ? "active" : ""}>Liên hệ</div>
                    </Link>
                </div>
            </div>

            <div className="header-banner" style={{ display: route === "/" ? "none" : "flex" }}>
                <div>
                    <h1>{titlePage}</h1>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Trang chủ</Breadcrumb.Item>
                        {breadcrumb?.map((item, index) => {
                            return (
                                <Breadcrumb.Item key={"bread" + index} href={item.url}>
                                    {item.title}
                                </Breadcrumb.Item>
                            )
                        })}
                    </Breadcrumb>
                </div>
            </div>
        </header>
    )
}
