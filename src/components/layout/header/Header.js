import React, { useRef, useState } from "react";
import { Breadcrumb, Container } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCaretDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { ImagesPath } from "src/constants/ImagesPath";
import { useRouter } from "next/router";
import SwitchLoginLogout from "./login-out/SwitchLoginLogout";
import { useSelector } from "react-redux";

export default function Header(props) {
    const route = useRouter().route;
    const { titlePage, breadcrumb } = props;
    const subMenu = useSelector((stores) => stores.menuSlice.value);
    const shopInfor = useSelector((stores) => stores.shopSlice.value);
    const router = useRouter();
    const inputSearchRef = useRef();
    const inputSearchRef2 = useRef();
    function search() {
        router.push(`/ket-qua-tim-kiem?forquery=${inputSearchRef.current.value}`);
    }
    function enterInput(e) {
        console.log(e.key === "Enter");
        if (e.key === "Enter") {
            search();
        }
    }
    function search2() {
        router.push(`/ket-qua-tim-kiem?forquery=${inputSearchRef2.current.value}`);
    }
    function enterInput2(e) {
        console.log(e.key === "Enter");
        if (e.key === "Enter") {
            search2();
        }
    }
    return (
        <header className="header">
            <Container>
                <div className="header-top">
                    <div className="contact">
                        <Link href={{ pathname: `tel:${shopInfor?.data?.phone}` }} passHref>
                            <a className="contact-item">
                                <div className="contact-item-icon">
                                    <Image src={ImagesPath.phoneIcon} alt="phone" />
                                </div>
                                <div className="contact-item-title">{shopInfor?.data?.phone}</div>
                            </a>
                        </Link>
                        <Link href={{ pathname: `mailto:${shopInfor?.data?.email}` }} passHref>
                            <a target="_blank" data-tip={`Mail: ${shopInfor?.data?.email}`} className="contact-item">
                                <div className="contact-item-icon">
                                    <Image src={ImagesPath.emailIcon} alt="email" />
                                </div>
                                <div className="contact-item-title">{shopInfor?.data?.email}</div>
                            </a>
                        </Link>
                        <Link href="#" passHref>
                            <a style={{ float: "right" }} className="contact-item">
                                <div className="contact-item-icon">
                                    <Image src={ImagesPath.listIcon} alt="phone" />
                                </div>
                                <Link href="/kiem-tra-don-hang" passHref>
                                    <div className="contact-item-title">Kiểm tra đơn hàng</div>
                                </Link>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="header-mid">
                    <div className="header-mid-search">
                        <input type="text" placeholder="Tìm kiếm sản phẩm..." ref={inputSearchRef} onKeyDown={enterInput}></input>
                        <span onClick={search}>
                            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                        </span>
                    </div>
                    <div className="header-mid-toggle_menu_btn">
                        <label htmlFor="toggle_sidebar">
                            <FontAwesomeIcon icon={faBars} />
                        </label>
                    </div>
                    <div className="header-mid-logo" style={{ marginTop: "-53px" }}>
                        <Image width={"90px"} height={90} src={ImagesPath.LOGO}></Image>
                    </div>
                    <SwitchLoginLogout />
                </div>
            </Container>
            <div className="header-bottom-search">
                <div>
                    <input ref={inputSearchRef2} onKeyDown={enterInput2} type="text" name="search" placeholder="Tìm kiếm sản phẩm..."></input>
                    <span onClick={search2}>
                        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                    </span>
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
                                );
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
                            );
                        })}
                    </Breadcrumb>
                </div>
            </div>
        </header>
    );
}
