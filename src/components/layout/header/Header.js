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
                        <span onClick={search} style={{ cursor: "pointer" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="27px" height="27px">
                                <path fill="#616161" d="M34.6 28.1H38.6V45.1H34.6z" transform="rotate(-45.001 36.586 36.587)" />
                                <path fill="#616161" d="M20 4A16 16 0 1 0 20 36A16 16 0 1 0 20 4Z" />
                                <path fill="#37474F" d="M36.2 32.1H40.2V44.400000000000006H36.2z" transform="rotate(-45.001 38.24 38.24)" />
                                <path fill="#64B5F6" d="M20 7A13 13 0 1 0 20 33A13 13 0 1 0 20 7Z" />
                                <path
                                    fill="#BBDEFB"
                                    d="M26.9,14.2c-1.7-2-4.2-3.2-6.9-3.2s-5.2,1.2-6.9,3.2c-0.4,0.4-0.3,1.1,0.1,1.4c0.4,0.4,1.1,0.3,1.4-0.1C16,13.9,17.9,13,20,13s4,0.9,5.4,2.5c0.2,0.2,0.5,0.4,0.8,0.4c0.2,0,0.5-0.1,0.6-0.2C27.2,15.3,27.2,14.6,26.9,14.2z"
                                />
                            </svg>
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
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="caret-down"
                                    className="svg-inline--fa fa-caret-down fa-w-10"
                                    role="img"
                                    viewBox="0 0 320 512"
                                    width={16}
                                    height={16}
                                >
                                    <path
                                        fill="currentColor"
                                        d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                                    />
                                </svg>
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
