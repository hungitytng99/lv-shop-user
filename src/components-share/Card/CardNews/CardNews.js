import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUber } from "@fortawesome/free-brands-svg-icons";

export default function CardNews() {
    return (
        <div className="card_news">
            <div className="thumb">
                <img src="https://bizweb.dktcdn.net/thumb/large/100/367/937/articles/ke-dung-do-nha-bep-kem-khay-dao-thot-600x600.jpg?v=1572497019233" alt="" />
                <span className="date">
                    <div>
                        <span className="day">31</span>
                        <span className="month">Tháng 10</span>
                    </div>
                </span>
            </div>
            <div className="title">Những món đồ dùng nhà bếp tiện ích kiến nhưng món đồ dùng nhà bếp khiến</div>
            <div className="author">
                <span>
                    <FontAwesomeIcon icon={faUber} />
                </span>
                <span>Đinh Văn Thư</span>
            </div>
            <div className="news_content">
                Đồ dùng nhà bếp được sử dụng một cách hợp lý nhờ vào cách chọn lựa của bạn. Không phải chỉ sử dụng đơn thuần với những chức năng cơ bản, chúng còn đóng vai trò tạo
                điểm nhấn dễ thương, góp phần mang đến vẻ đẹp xinh yêu và không khí vui nhộn cho những khi cả nhà cùng vào bếp.
            </div>
        </div>
    );
}
