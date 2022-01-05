import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { ImagesPath } from "src/constants/ImagesPath";
import Link from "next/dist/client/link";
const { convert } = require("html-to-text");

export default function CardNews(props) {
    const { imageUrl = ImagesPath.noDataFound.src, day = 1, month = 1, title = "", author = "", content = "", desc = "", urlPage = "#" } = props.data;
    return (
        <div className="card_news">
            <div className="thumb">
                <Link href={urlPage} passHref>
                    <img src={imageUrl} alt="Bài viết tiện ích xanh shop Lộc Vừng" />
                </Link>
                <span className="date">
                    <div>
                        <span className="day">{day}</span>
                        <span className="month">Tháng {month}</span>
                    </div>
                </span>
            </div>
            <Link href={urlPage} passHref>
                <div className="title ">{title}</div>
            </Link>
            <div className="author">
                <span>
                    <FontAwesomeIcon icon={faUserTie} />
                </span>
                <span>Đăng bởi: {author}</span>
            </div>
            <hr />
            <div className="news_content">{desc}</div>
            {/* <div>
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </div> */}
        </div>
    );
}
