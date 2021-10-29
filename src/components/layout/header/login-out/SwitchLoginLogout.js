import React, { useEffect, useState } from "react"
import Image from "next/image"
import { ImagesPath } from "src/constants/ImagesPath"
import Link from "next/dist/client/link"
import { useDispatch, useSelector } from "react-redux"
import { storageKey } from "./../../../../constants/storageKeys"
import { clearUserData } from "src/redux/slices/userSlice"
import { v4 as uuidv4 } from "uuid"
import CartItemReview from "./../../../../components-share/Cart/cart_item_review/CartItemReview"
import { format_d_currency } from "src/share_function"

export default function SwitchLoginLogout() {
    const dispatch = useDispatch()
    const [user, setUser] = useState(false)
    const cartData = useSelector((stores) => stores.cartSlice.value)
    const productList = cartData.products
    useEffect(() => {
        if (localStorage.getItem(storageKey.TOKEN)) {
            setUser(true)
        }
    }, [])

    function renderProductList() {
        if (cartData.totalProduct == 0) {
            return <div>Không có sản phẩm nào trong giỏ hàng</div>
        } else {
            return (
                <>
                    {productList?.map((item) => {
                        return (
                            <div key={uuidv4()}>
                                <CartItemReview data={item} />
                            </div>
                        )
                    })}
                </>
            )
        }
    }

    function clickLogOut() {
        setUser(false)
        dispatch(clearUserData())
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
                <Link href="/cart" passHref>
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
                            {cartData.totalProduct}
                        </span>
                    </div>
                </Link>
                <div className="header-mid-account-cart-product">
                    <div className="product_list">{renderProductList()}</div>
                    <div className="cart_total_price">
                        <span>{format_d_currency(cartData.totalPrice)}</span>
                    </div>
                    <div style={{ textAlign: "right", margin: "10px 0px" }}>
                        <Link href="/cart" passHref>
                            <span className="btn-gray">Tới giỏ hàng</span>
                        </Link>
                        <span className="btn-red">Tiến hành thanh toán</span>
                    </div>
                </div>
            </span>
        </div>
    )
}
