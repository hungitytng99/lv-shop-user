import React, { useRef, useState } from "react";
import Layout from "src/components/layout/Layout";
import { Container, Button } from "react-bootstrap";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function KiemTraDonHang() {
    const breadcrumb = [
        {
            title: "Kiểm tra đơn hàng",
            url: "/kiem-tra-don-hang",
        },
    ];
    const [typeCheck, setTypeCheck] = useState("phone");
    const singlePhone = useRef(null);
    const singleEmail = useRef(null);
    const bothPhone = useRef(null);
    const bothEmail = useRef(null);
    function changeRadiobox(e) {
        setTypeCheck(e.target.value);
    }
    function submit() {
        if (typeCheck === "phone") {
            console.log(singlePhone.current.value);
        } else if (typeCheck === "email") {
            console.log(singleEmail.current.value);
        } else {
            console.log(bothPhone.current.value, bothEmail.current.value);
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
                    <div></div>
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
