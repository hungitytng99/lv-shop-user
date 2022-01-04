import React, { useRef, useState } from "react";
import Layout from "src/components/layout/Layout";
import { Container, Button } from "react-bootstrap";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import CardHistoryOrder from "./../../src/components-share/Card/CardHistoryOrder/CardHistoryOrder";
import { userService } from "src/services/user";

export default function KiemTraDonHang() {
    const breadcrumb = [
        {
            title: "Kiểm tra đơn hàng",
            url: "/kiem-tra-don-hang",
        },
    ];
    const [listHistoryOrder, setListHistoryOrder] = useState([]);
    const [typeCheck, setTypeCheck] = useState("phone");
    const singlePhone = useRef(null);
    const singleEmail = useRef(null);
    const bothPhone = useRef(null);
    const bothEmail = useRef(null);
    function changeRadiobox(e) {
        setTypeCheck(e.target.value);
    }
    async function submit() {
        if (typeCheck === "phone") {
            const res = await userService.getUserOrders({ phone: singlePhone.current.value });
            setListHistoryOrder(res.data);
            console.log(singlePhone.current.value);
        } else if (typeCheck === "email") {
            const res = await userService.getUserOrders({ phone: singleEmail.current.value });
            setListHistoryOrder(res.data);
            console.log(singleEmail.current.value);
        } else if (typeCheck === "both") {
            const res = await userService.getUserOrders({ phone: bothPhone.current.value, email: bothEmail.current.value });
            setListHistoryOrder(res.data);
            console.log(bothPhone.current.value, bothEmail.current.value);
        } else {
        }
    }
    return (
        <div>
            <Layout titlePage={breadcrumb[0].title} breadcrumb={breadcrumb}>
                <Container className="">
                    <div style={{ maxWidth: "450px", margin: "30px auto", background: "rgba(228,228,228,1)", padding: "20px", borderRadius: "5px", boxShadow: "3px 3px 3px #ccc" }}>
                        <div style={{ display: "flex", textAlign: "center", justifyContent: "center", margin: "0px 0px 20px 0px" }}>
                            <span style={{ marginRight: "15px" }}>
                                <FontAwesomeIcon icon={faSearch} />
                            </span>
                            <b>Kiểm tra đơn hàng của bạn</b>
                        </div>
                        <hr style={{ background: "#009688" }} />
                        <div>
                            <p>Kiểm tra bằng:</p>
                            <div>
                                <span style={{ marginRight: "15px", cursor: "pointer" }}>
                                    <input
                                        style={{ marginRight: "5px" }}
                                        type="radio"
                                        name="checkOrderType"
                                        id="type_phone"
                                        value="phone"
                                        checked={typeCheck == "phone"}
                                        onChange={changeRadiobox}
                                    />
                                    <label style={{ cursor: "pointer" }} htmlFor="type_phone">
                                        Số điện thoại
                                    </label>
                                </span>
                                <span style={{ marginRight: "15px", cursor: "pointer" }}>
                                    <input
                                        style={{ marginRight: "5px" }}
                                        type="radio"
                                        name="checkOrderType"
                                        id="type_email"
                                        value="email"
                                        checked={typeCheck == "email"}
                                        onChange={changeRadiobox}
                                    />
                                    <label style={{ cursor: "pointer" }} htmlFor="type_email">
                                        Email
                                    </label>
                                </span>
                                <span style={{ marginRight: "15px", cursor: "pointer" }}>
                                    <input
                                        style={{ marginRight: "5px" }}
                                        type="radio"
                                        name="checkOrderType"
                                        id="type_both"
                                        value="both"
                                        checked={typeCheck == "both"}
                                        onChange={changeRadiobox}
                                    />
                                    <label style={{ cursor: "pointer" }} htmlFor="type_both">
                                        Số điện thoại và Email
                                    </label>
                                </span>
                            </div>
                        </div>
                        <div>
                            {typeCheck === "phone" ? (
                                <div>
                                    <p>Nhập số điện thoại:</p>
                                    <input
                                        ref={singlePhone}
                                        type="tel"
                                        name="phone"
                                        style={{ width: "100%", padding: "5px 10px", border: "1px solid #2196f3", outline: "none", borderRadius: "5px" }}
                                    />
                                </div>
                            ) : null}
                            {typeCheck === "email" ? (
                                <div>
                                    <p>Nhập email:</p>
                                    <input
                                        ref={singleEmail}
                                        type="text"
                                        name="email"
                                        style={{ width: "100%", padding: "5px 10px", border: "1px solid #2196f3", outline: "none", borderRadius: "5px" }}
                                    />
                                </div>
                            ) : null}
                            {typeCheck === "both" ? (
                                <div>
                                    <p>Nhập số điện thoại:</p>
                                    <input
                                        ref={bothPhone}
                                        type="tel"
                                        name="phone"
                                        style={{ width: "100%", padding: "5px 10px", border: "1px solid #2196f3", outline: "none", borderRadius: "5px" }}
                                    />
                                    <br />
                                    <p>Nhập email:</p>
                                    <input
                                        ref={bothEmail}
                                        type="text"
                                        name="email"
                                        style={{ width: "100%", padding: "5px 10px", border: "1px solid #2196f3", outline: "none", borderRadius: "5px" }}
                                    />
                                </div>
                            ) : null}
                        </div>
                        <div style={{ textAlign: "right", marginTop: "20px" }}>
                            <Button onClick={submit}>Submit</Button>
                        </div>
                    </div>
                    <div>
                        {listHistoryOrder.length === 0 ? (
                            <div style={{ textAlign: "center" }}>Không có dữ liệu</div>
                        ) : (
                            listHistoryOrder.map((item, index) => {
                                return <CardHistoryOrder key={"historycardse" + index} data={item} />;
                            })
                        )}
                    </div>
                </Container>
            </Layout>
        </div>
    );
}
export async function getServerSideProps() {
    try {
        return {
            props: {},
        };
    } catch (error) {
        return {
            notFound: true,
        };
    }
}
