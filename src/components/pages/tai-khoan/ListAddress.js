import React, { useState, useEffect } from "react";
import { faPencilAlt, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col } from "react-bootstrap";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import ModalLayout from "src/components-share/Modal/ModalLayout";
import { useDispatch } from "react-redux";
import { addressService } from "./../../../services/address/index";
import { FloatingLabel, Form, Button } from "react-bootstrap";
import { userService } from "./../../../services/user/index";
import { REQUEST_STATE } from "src/app-configs";

const fakedata = [
    {
        name: "Lê Đình Quyền",
        address: "Số 2 ngõ 165, giáp bát, hoàng mai, hà nộidd asdj jsjk ạ ",
        addressCode: { province: "-1", district: "-1", wards: "-1" },
        textAddress: { province: "", district: "", wards: "", street: "" },
        phone: "0941158376",
    },
    {
        name: "Lê Đình Quyền",
        address: "Số 2 ngõ 165, giáp bát, hoàng mai, hà nội",
        phone: "0941158376",
    },
    {
        name: "Lê Đình Quyền",
        address: "Số 2 ngõ 165, giáp bát, hoàng mai, hà nội",
        phone: "0941158376",
    },
];

const initStateModal = {
    isOpen: false,
    isCreateNew: true,
    titleModal: "Địa chỉ nhận hàng",
    name: "",
    phone: "",
    isDefault: false,
    text_address: {
        provinces: "",
        districts: "",
        wards: "",
        street: "",
    },
    address: {
        provinces: "-1",
        districts: "-1",
        wards: "-1",
    },
};
function getFullPathAddress(address, text_address) {
    let fulladdress = "";
    fulladdress += text_address.street !== "" ? text_address.street + ", " : "";
    fulladdress += address.wards !== "-1" ? text_address.wards + ", " : "";
    fulladdress += address.districts !== "-1" ? text_address.districts + ", " : "";
    fulladdress += address.provinces !== "-1" ? text_address.provinces : "";
    return fulladdress;
}
export default function ListAddress() {
    const [provincesList, setProvincesList] = useState([]);
    const [districtsList, setDistrictsList] = useState([]);
    const [wardsList, setWardsList] = useState([]);
    const [listAddress, setListAddress] = useState([]);
    const [dataModal, setDataModal] = useState(initStateModal);
    useEffect(() => {
        (async () => {
            const getListAddress = await userService.getListAddressUser();
            setListAddress(getListAddress.data);
            const response = await addressService.getProvinces();
            setProvincesList(response.data);
        })();
    }, []);

    async function submitNewAddress() {
        const value = {
            name: dataModal.name,
            phone: dataModal.phone,
            isDefault: dataModal.isDefault,
            address: dataModal.address,
            text_address: dataModal.text_address,
        };
        const res = await userService.createAddressUser(value);
        if (res.state === REQUEST_STATE.SUCCESS) {
            const regetListAddress = await userService.getListAddressUser();
            setListAddress(regetListAddress.data);
            setDataModal(initStateModal);
        } else {
            alert("Có lỗi. Vui lòng thử lại sau");
            setDataModal(initStateModal);
        }
    }
    async function deleteAddress(id) {
        const res = await userService.deleteMetaData(id);
        if (res.state === REQUEST_STATE.SUCCESS) {
            const regetListAddress = await userService.getListAddressUser();
            setListAddress(regetListAddress.data);
            setDataModal(initStateModal);
        } else {
            alert("Có lỗi. Vui lòng thử lại sau");
            setDataModal(initStateModal);
        }
    }
    async function updateAddress(id) {
        const value = {
            name: dataModal.name,
            phone: dataModal.phone,
            isDefault: dataModal.isDefault,
            address: dataModal.address,
            text_address: dataModal.text_address,
        };
        const res = await userService.updateAddressUser(id, value);
        if (res.state === REQUEST_STATE.SUCCESS) {
            const regetListAddress = await userService.getListAddressUser();
            setListAddress(regetListAddress.data);
            setDataModal(initStateModal);
        } else {
            alert("Có lỗi. Vui lòng thử lại sau");
            setDataModal(initStateModal);
        }
    }

    function updateProvince(newVal, nameCity) {
        // console.log(nameCity);
        const newdataModal = {
            ...dataModal,
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
        setDataModal(newdataModal);
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
        const newdataModal = {
            ...dataModal,
            text_address: {
                ...dataModal.text_address,
                districts: nameDistrict,
                wards: "",
            },
            address: {
                ...dataModal.address,
                districts: newVal,
                wards: "-1",
            },
        };
        setDataModal(newdataModal);
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
        const newdataModal = {
            ...dataModal,
            text_address: {
                ...dataModal.text_address,
                wards: nameWard,
            },
            address: {
                ...dataModal.address,
                wards: newVal,
            },
        };
        setDataModal(newdataModal);
    }
    function updatePhone(newVal) {
        const newdataModal = {
            ...dataModal,
            phone: newVal,
        };
        setDataModal(newdataModal);
    }
    function updateName(newVal) {
        const newdataModal = {
            ...dataModal,
            name: newVal,
        };
        setDataModal(newdataModal);
    }
    function updateStreet(newVal) {
        const newdataModal = {
            ...dataModal,
            text_address: {
                ...dataModal.text_address,
                street: newVal,
            },
        };
        setDataModal(newdataModal);
    }
    function setIsDefaultAddress() {
        const newdataModal = {
            ...dataModal,
            isDefault: !dataModal.isDefault,
        };
        setDataModal(newdataModal);
    }
    function openModalAddAddress() {
        const newdataModal = {
            ...initStateModal,
            isOpen: true,
            titleModal: "Thêm địa chỉ nhận hàng",
            isCreateNew: true,
        };
        setDataModal(newdataModal);
    }
    function openModalLookAddress() {
        const newdataModal = {
            isOpen: true,
            titleModal: "Địa chỉ nhận hàng",
            name: "",
            phone: "",
            isDefault: true,
            text_address: {
                provinces: "",
                districts: "",
                wards: "",
                street: "",
            },
            address: {
                provinces: "36",
                districts: "358",
                wards: "-1",
            },
        };
        if (newdataModal.address.provinces == "-1") {
            setDistrictsList([]);
            setWardsList([]);
        } else {
            if (newdataModal.address.districts == "-1") {
                setWardsList([]);
            } else {
                (async () => {
                    const response = await addressService.getWards(newdataModal.address.districts);
                    setWardsList(response.data);
                })();
            }
            (async () => {
                const response = await addressService.getDistricts(newdataModal.address.provinces);
                setDistrictsList(response.data);
            })();
        }
        setDataModal(newdataModal);
    }
    function openEditAddressModal(dataItem) {
        const newdataModal = {
            isOpen: true,
            titleModal: "Sửa địa chỉ nhận hàng",
            isDefault: false,
            isCreateNew: false,
            name: dataItem.value.name,
            phone: dataItem.value.phone,
            text_address: dataItem.value.text_address,
            address: dataItem.value.address,
            idMeta: dataItem.idMeta,
        };
        if (newdataModal.address.provinces == "-1") {
            setDistrictsList([]);
            setWardsList([]);
        } else {
            if (newdataModal.address.districts == "-1") {
                setWardsList([]);
            } else {
                (async () => {
                    const response = await addressService.getWards(newdataModal.address.districts);
                    setWardsList(response.data);
                })();
            }
            (async () => {
                const response = await addressService.getDistricts(newdataModal.address.provinces);
                setDistrictsList(response.data);
            })();
        }
        setDataModal(newdataModal);
    }
    function closeModal() {
        const newdataModal = {
            ...dataModal,
            isOpen: false,
        };
        setDataModal(newdataModal);
    }

    return (
        <>
            <h4 className="box_title" style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Địa chỉ nhận hàng</span>
                <span className="add_address" onClick={openModalAddAddress}>
                    <FontAwesomeIcon icon={faPlusCircle} />
                </span>
            </h4>
            <div className="list_address ">
                <div className="table_data">
                    <Row className="table_header">
                        <Col xs={2}>Tên</Col>
                        <Col xs={6}>Địa chỉ</Col>
                        <Col xs={2}>Số điện thoại</Col>
                        <Col xs={2}>#</Col>
                    </Row>
                    {listAddress.map((item, index) => {
                        return (
                            <Row key={"address_item" + index} className="table_row">
                                <Col xs={2}>{item.value.name}</Col>
                                <Col xs={6} className="overflow_ellipsis">
                                    {getFullPathAddress(item.value.address, item.value.text_address)}
                                </Col>
                                <Col xs={2}>{item.value.phone}</Col>
                                <Col xs={2}>
                                    {/* <span className="icon_function eye" title="xem" onClick={() => openModalLookAddress()}>
                                        <FontAwesomeIcon icon={faEye} />
                                    </span> */}
                                    <span className="icon_function edit" title="sửa" onClick={() => openEditAddressModal(item)}>
                                        <FontAwesomeIcon icon={faPencilAlt} />{" "}
                                    </span>
                                    <span className="icon_function remove" title="xoá" onClick={() => deleteAddress(item.idMeta)}>
                                        <FontAwesomeIcon icon={faTimes} />{" "}
                                    </span>
                                </Col>
                            </Row>
                        );
                    })}
                </div>
            </div>
            <ModalLayout isOpen={dataModal.isOpen} closeModalEvent={() => closeModal()}>
                <div className="address_modal">
                    <h4 className="mb-3">{dataModal.titleModal}</h4>
                    <FloatingLabel controlId="nameInput" label="Họ và Tên" className="mb-3">
                        <Form.Control type="name" placeholder="name@example.com" value={dataModal.name} onChange={(e) => updateName(e.target.value)} />
                    </FloatingLabel>
                    <FloatingLabel controlId="phoneInput" label="Số điện thoại" className="mb-3">
                        <Form.Control type="tel" placeholder="phone" value={dataModal.phone} onChange={(e) => updatePhone(e.target.value)} />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingSelect" label="Tỉnh thành" style={{ marginBottom: "20px" }}>
                        <Form.Select
                            aria-label="Tỉnh thành"
                            value={dataModal.address.provinces}
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
                            value={dataModal.address.districts}
                            onChange={(e) => updateDistrict(e.target.value, e.target.selectedOptions[0].innerText)}
                            disabled={dataModal.address.provinces == "-1" ? true : false}
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
                            value={dataModal.address.wards}
                            onChange={(e) => updateWard(e.target.value, e.target.selectedOptions[0].innerText)}
                            disabled={dataModal.address.districts == "-1" ? true : false}
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
                        <Form.Control type="text" placeholder="Address" value={dataModal.text_address.street} onChange={(e) => updateStreet(e.target.value)} />
                    </FloatingLabel>
                    {/* <div>
                        <input type="checkbox" id="setDefaultAddress" checked={dataModal.isDefault} onClick={setIsDefaultAddress} readOnly />{" "}
                        <label htmlFor="setDefaultAddress">Đặt làm mặc định</label>
                    </div> */}
                    <div style={{ textAlign: "right" }}>
                        <Button
                            variant="success"
                            onClick={
                                dataModal.isCreateNew
                                    ? () => submitNewAddress()
                                    : () => {
                                          updateAddress(dataModal.idMeta);
                                      }
                            }
                        >
                            Lưu
                        </Button>
                    </div>
                </div>
            </ModalLayout>
        </>
    );
}
