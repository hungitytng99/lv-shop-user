import React, { useState } from "react"
import Image from "next/image"
import { ImagesPath } from "constants/ImagesPath"
import Link from "next/dist/client/link"
export default function SwitchLoginLogout() {
    const [user, setUser] = useState(false)
    function clickLogin() {
        setUser(true)
    }
    function clickLogOut() {
        setUser(false)
    }
    return (
        <div className="header-mid-account">
            <span>
                <div style={{ display: user ? "none" : "inline-block" }} className="header-mid-account-icon">
                    <Image src={ImagesPath.userIcon}></Image>
                </div>
                <div style={{ display: user ? "inline-block" : "none" }} className="header-mid-account-icon header-mid-account-avata">
                    <img src="https://recmiennam.com/wp-content/uploads/2020/09/anh-gai-xinh-facebook-21.jpg"></img>
                </div>
                <span>Tài khoản</span>
                <div className="header-mid-account-option">
                    <Link href="/dang-nhap" passHref>
                        <div style={{ display: user ? "none" : "block" }}>Đăng nhập</div>
                    </Link>
                    <Link href="/dang-ky" passHref>
                        <div style={{ display: user ? "none" : "block" }}>Đăng ký</div>
                    </Link>
                    <div style={{ display: user ? "block" : "none" }}>Tài khoản</div>
                    <div style={{ display: user ? "block" : "none" }} onClick={clickLogOut}>
                        Đăng xuất
                    </div>
                </div>
            </span>

            <span className="header-mid-account-cart">
                <div className="header-mid-account-icon">
                    <Image src={ImagesPath.cartIcon}></Image>
                    <span
                        style={{
                            position: "absolute",
                            right: "-5px",
                            top: "-8px",
                            background: "red",
                            borderRadius: "50%",
                            display: "block",
                            padding: "2px",
                            width: "fit-content",
                            height: "20px",
                            lineHeight: "15px",
                            textAlign: "center",
                            minWidth: "20px",
                            color: "#fff",
                            fontSize: "small",
                        }}
                    >
                        0
                    </span>
                </div>
                <div className="header-mid-account-cart-product">
                    <div>Không có sản phẩm trong giỏ hàng</div>
                </div>
            </span>
        </div>
    )
}
