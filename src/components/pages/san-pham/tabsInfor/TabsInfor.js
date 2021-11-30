import React from "react"
import { Tabs, Tab } from "react-bootstrap"
export default function TabsInfor() {
    return (
        <div>
            <Tabs defaultActiveKey="mota" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="mota" title="Mô tả">
                    <pre>
                        <br /> 🔹️Giữ cho đôi bàn tay luôn ấm áp khi đi xe máy, đặc biệt là khi di chuyển trong đoạn đường xa trong thời tiết giá lạnh.
                        <br /> ️🔹️Thuận tiện khi điều khiển xe như: tăng/giảm ga, bóp/nhả phanh.
                        <br /> ️🔹️Bên ngoài bọc giả da chống thấm, chống gió lùa vào. Bên trong là lớp vải bông mềm mại, ấm áp.
                        <br /> ️🔹️Sản phẩm phù hợp với cả xe tay ga lẫn xe số.
                    </pre>
                </Tab>
                <Tab eventKey="thongtin" title="Thông tin">
                    Thông tin về sản phẩm
                </Tab>
                <Tab eventKey="danhgia" title="Đánh giá">
                    Đánh giá của người dùng
                </Tab>
            </Tabs>
        </div>
    )
}
