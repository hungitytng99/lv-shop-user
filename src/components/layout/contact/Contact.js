import React from "react";
import Link from "next/dist/client/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { ImagesPath } from "../../../constants/ImagesPath";
import { useSelector } from "react-redux";
import Image from "next/dist/client/image";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
    const shopInfor = useSelector((stores) => stores.shopSlice.value);

    return (
        <div className="social_contact">
            <Link href={shopInfor.data?.facebook || "#"} passHref>
                <a className="social_contact_icon" target="_blank" style={{ color: "#1e3ad4" }}>
                    <FontAwesomeIcon icon={faFacebookF} />
                </a>
            </Link>
            <Link href={shopInfor.data?.instagram || "#"} passHref>
                <a className="social_contact_icon" target="_blank" style={{ color: "#ff1e45" }}>
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </Link>
            <Link href={shopInfor.data?.youtube || "#"} passHref>
                <a className="social_contact_icon" target="_blank" style={{ color: "#f44336" }}>
                    <FontAwesomeIcon icon={faYoutube} />
                </a>
            </Link>
            <Link href={shopInfor.data?.zalo || "#"} passHref>
                <a className="social_contact_icon" target="_blank" style={{ color: "rgb(1 128 199)" }}>
                    <Image src={ImagesPath.zaloIcon} alt="tiện ích lộc vừng" />
                </a>
            </Link>
            <span className="social_contact_icon" style={{ color: "#ff5722" }}>
                <FontAwesomeIcon icon={faPhone} />
            </span>
        </div>
    );
}
