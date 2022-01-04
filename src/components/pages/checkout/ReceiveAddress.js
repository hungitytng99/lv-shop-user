import React, { useEffect, useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { REQUEST_STATE } from "src/app-configs";
import { clearCheckoutInfo } from "src/redux/slices/checkoutSlice";
import { updateCheckoutInfo } from "src/redux/slices/checkoutSlice";
import { addressService } from "./../../../services/address/index";
import { userService } from "./../../../services/user/index";

function getFullPathAddress(address, text_address) {
    let fulladdress = "";
    fulladdress += text_address.street !== "" ? text_address.street + ", " : "";
    fulladdress += address.wards !== "-1" ? text_address.wards + ", " : "";
    fulladdress += address.districts !== "-1" ? text_address.districts + ", " : "";
    fulladdress += address.provinces !== "-1" ? text_address.provinces : "";
    return fulladdress;
}

export default function ReceiveAddress() {
    const [provincesList, setProvincesList] = useState([]);
    const [districtsList, setDistrictsList] = useState([]);
    const [wardsList, setWardsList] = useState([]);
    const dispatch = useDispatch();
    const [listAddress, setListAddress] = useState([]);
    const dataCheckout = useSelector((stores) => stores.checkoutSlice.value);
    const userData = useSelector((stores) => stores.userSlice.value);
    useEffect(() => {
        (async () => {
            const getListAddress = await userService.getListAddressUser();
            setListAddress(getListAddress.data);
            const response = await addressService.getProvinces();
            setProvincesList(response.data);
        })();
    }, []);

    function updateProvince(newVal, nameCity) {
        // console.log(nameCity);
        const newDataCheckout = {
            ...dataCheckout,
            text_address: {
                provinces: nameCity,
                districts: "",
                wards: "",
                street: "",
            },
            address: {
                provinces: newVal,
                districts: "-1",
                wards: "-1",
            },
        };
        dispatch(updateCheckoutInfo(newDataCheckout));
        if (newVal == "-1") {
            setDistrictsList([]);
            setWardsList([]);
        } else {
            (async () => {
                const response = await addressService.getDistricts(newVal);
                setDistrictsList(response.data);
                setWardsList([]);
            })();
        }
    }
    function updateDistrict(newVal, nameDistrict) {
        const newDataCheckout = {
            ...dataCheckout,
            text_address: {
                ...dataCheckout.text_address,
                districts: nameDistrict,
                wards: "",
            },
            address: {
                ...dataCheckout.address,
                districts: newVal,
                wards: "-1",
            },
        };
        dispatch(updateCheckoutInfo(newDataCheckout));
        if (newVal == "-1") {
            setWardsList([]);
        } else {
            (async () => {
                const response = await addressService.getWards(newVal);
                setWardsList(response.data);
            })();
        }
    }
    function updateWard(newVal, nameWard) {
        const newDataCheckout = {
            ...dataCheckout,
            text_address: {
                ...dataCheckout.text_address,
                wards: nameWard,
            },
            address: {
                ...dataCheckout.address,
                wards: newVal,
            },
        };
        dispatch(updateCheckoutInfo(newDataCheckout));
    }
    function updatePhone(newVal) {
        const newDataCheckout = {
            ...dataCheckout,
            phone: newVal,
        };
        dispatch(updateCheckoutInfo(newDataCheckout));
    }
    function updateName(newVal) {
        const newDataCheckout = {
            ...dataCheckout,
            name: newVal,
        };
        dispatch(updateCheckoutInfo(newDataCheckout));
    }
    function updateNote(newVal) {
        const newDataCheckout = {
            ...dataCheckout,
            note: newVal,
        };
        dispatch(updateCheckoutInfo(newDataCheckout));
    }
    function updateStreet(newVal) {
        const newDataCheckout = {
            ...dataCheckout,
            text_address: {
                ...dataCheckout.text_address,
                street: newVal,
            },
        };
        dispatch(updateCheckoutInfo(newDataCheckout));
    }
    function changeReceiveInfo(index) {
        if (index == -1) {
            dispatch(clearCheckoutInfo());
        } else {
            const newDataCheckout = {
                ...dataCheckout,
                name: listAddress[index].value.name,
                phone: listAddress[index].value.phone,
                text_address: listAddress[index].value.text_address,
                address: listAddress[index].value.address,
            };
            dispatch(updateCheckoutInfo(newDataCheckout));
            if (newDataCheckout.address.provinces == "-1") {
                setDistrictsList([]);
                setWardsList([]);
            } else {
                if (newDataCheckout.address.districts == "-1") {
                    setWardsList([]);
                } else {
                    (async () => {
                        const response = await addressService.getWards(newDataCheckout.address.districts);
                        setWardsList(response.data);
                    })();
                }
                (async () => {
                    const response = await addressService.getDistricts(newDataCheckout.address.provinces);
                    setDistrictsList(response.data);
                })();
            }
        }
    }

    return (
        <div>
            <h5>Thông tin nhận hàng</h5>
            <div className="receive_address">
                {userData.data?.deviceId == null && userData.state != REQUEST_STATE.ERROR ? (
                    <FloatingLabel controlId="floatingSelect" label="Sổ địa chỉ" style={{ marginBottom: "20px" }}>
                        <Form.Select aria-label="Sổ địa chỉ" defaultChecked="-1" onChange={(e) => changeReceiveInfo(Number(e.target.value))}>
                            <option className="overflow_ellipsis" value="-1">
                                ---Địa chỉ khác---
                            </option>
                            {listAddress.map((item, index) => {
                                return (
                                    <option className="overflow_ellipsis" key={"listaddress" + index} value={index}>
                                        {getFullPathAddress(item.value.address, item.value.text_address)}
                                    </option>
                                );
                            })}
                        </Form.Select>
                    </FloatingLabel>
                ) : null}

                <FloatingLabel controlId="nameInput" label="Họ và Tên" className="mb-3">
                    <Form.Control type="name" placeholder="name@example.com" value={dataCheckout.name} onChange={(e) => updateName(e.target.value)} />
                </FloatingLabel>
                <FloatingLabel controlId="phoneInput" label="Số điện thoại" className="mb-3">
                    <Form.Control type="tel" placeholder="phone" value={dataCheckout.phone} onChange={(e) => updatePhone(e.target.value)} />
                </FloatingLabel>

                <FloatingLabel controlId="floatingSelect" label="Tỉnh thành" style={{ marginBottom: "20px" }}>
                    <Form.Select
                        aria-label="Tỉnh thành"
                        value={dataCheckout.address.provinces}
                        onChange={(e) => updateProvince(e.target.value, e.target.selectedOptions[0].innerText)}
                    >
                        <option value="-1">-------</option>
                        {provincesList.map((province, index) => {
                            return (
                                <option key={"province" + province.id + index} value={province.id}>
                                    {province.name}
                                </option>
                            );
                        })}
                    </Form.Select>
                </FloatingLabel>
                <FloatingLabel controlId="floatingSelect" label="Quận, Huyện" style={{ marginBottom: "20px" }}>
                    <Form.Select
                        aria-label="Quận, Huyện, Thị trấn"
                        value={dataCheckout.address.districts}
                        onChange={(e) => updateDistrict(e.target.value, e.target.selectedOptions[0].innerText)}
                        disabled={dataCheckout.address.provinces == "-1" ? true : false}
                    >
                        <option value="-1">-------</option>
                        {districtsList.map((district, index) => {
                            return (
                                <option key={"district" + district.id + index} value={district.id}>
                                    {district.name}
                                </option>
                            );
                        })}
                    </Form.Select>
                </FloatingLabel>
                <FloatingLabel controlId="floatingSelect" label="Thị trấn, phường, xã" style={{ marginBottom: "20px" }}>
                    <Form.Select
                        aria-label="Thị trấn, phường, xã"
                        value={dataCheckout.address.wards}
                        onChange={(e) => updateWard(e.target.value, e.target.selectedOptions[0].innerText)}
                        disabled={dataCheckout.address.districts == "-1" ? true : false}
                    >
                        <option value="-1">-------</option>
                        {wardsList.map((wards, index) => {
                            return (
                                <option key={"wards" + wards.id + index} value={wards.id}>
                                    {wards.name}
                                </option>
                            );
                        })}
                    </Form.Select>
                </FloatingLabel>

                <FloatingLabel controlId="addressInput" label="Đường, phố, số nhà" className="mb-3">
                    <Form.Control type="text" placeholder="Address" value={dataCheckout.text_address.street} onChange={(e) => updateStreet(e.target.value)} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingTextarea" label="Để lại nhời nhắn của bạn ở đây...">
                    <Form.Control
                        as="textarea"
                        placeholder="Để lại nhời nhắn của bạn ở đây."
                        value={dataCheckout.note}
                        onChange={(e) => updateNote(e.target.value)}
                        style={{ height: "100px" }}
                    />
                </FloatingLabel>
            </div>
        </div>
    );
}
