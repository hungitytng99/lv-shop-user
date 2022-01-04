import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/dist/client/link";
import { useDispatch, useSelector } from "react-redux";
import { storageKey } from "./../../../../constants/storageKeys";
import { clearUserData } from "src/redux/slices/userSlice";
import { v4 as uuidv4 } from "uuid";
import CartItemReview from "./../../../../components-share/Cart/cart_item_review/CartItemReview";
import { format_d_currency } from "src/share_function";
import { ImagesPath } from "./../../../../constants/ImagesPath";
import { userLogout } from "./../../../../redux/slices/userSlice";
import { REQUEST_STATE } from "src/app-configs";
import { useRouter } from "next/router";

export default function SwitchLoginLogout() {
    const dispatch = useDispatch();
    const router = useRouter();
    const cartData = useSelector((stores) => stores.cartSlice.value);
    const productList = cartData.products;

    const userData = useSelector((stores) => stores.userSlice.value);
    let isUser = false;
    if (userData.data?.deviceId == null && userData.state != REQUEST_STATE.ERROR) isUser = true;

    function renderProductList() {
        if (cartData.totalProduct == 0) {
            return <div style={{ padding: "10px" }}>Không có sản phẩm nào trong giỏ hàng</div>;
        } else {
            return (
                <>
                    {productList?.map((item) => {
                        return (
                            <div key={uuidv4()}>
                                <CartItemReview data={item} />
                            </div>
                        );
                    })}
                </>
            );
        }
    }

    function clickLogOut() {
        dispatch(userLogout());
        if (router.asPath == "/") {
            router.reload("/");
        } else {
            router.push("/");
        }
    }
    return (
        <div className="header-mid-account">
            <span>
                <div style={{ display: isUser ? "none" : "inline-block" }} className="header-mid-account-icon">
                    <Image src={ImagesPath.userIcon}></Image>
                </div>
                <div style={{ display: isUser ? "flex" : "none" }} className="header-mid-account-icon header-mid-account-avata">
                    {userData.data.avatar ? (
                        <img src={`${process.env.NEXT_PUBLIC_IMG_BASE_URL}/${userData.data.avatar}`} />
                    ) : (
                        <span className=" user_no_img ">{userData.data.name ? userData.data.name[0] : ""}</span>
                    )}
                </div>
                <span>Tài khoản</span>
                <div className="header-mid-account-option">
                    <Link href="/dang-nhap" passHref>
                        <div style={{ display: isUser ? "none" : "block" }}>Đăng nhập</div>
                    </Link>
                    <Link href="/dang-ky" passHref>
                        <div style={{ display: isUser ? "none" : "block" }}>Đăng ký</div>
                    </Link>
                    <Link href="/tai-khoan" passHref>
                        <div style={{ display: isUser ? "block" : "none" }}>Tài khoản</div>
                    </Link>
                    <div style={{ display: isUser ? "block" : "none" }} onClick={clickLogOut}>
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
                        <Link href={cartData.totalProduct == 0 ? "#" : "/checkout"} passHref>
                            <span className={`btn-red ${cartData.totalProduct == 0 ? "btn-disable" : ""}`}>Tiến hành thanh toán</span>
                        </Link>
                    </div>
                </div>
            </span>
        </div>
    );
}
