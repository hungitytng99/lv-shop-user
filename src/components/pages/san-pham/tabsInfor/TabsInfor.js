import React from "react";
import { Tabs, Tab } from "react-bootstrap";
export default function TabsInfor(props) {
    const { product } = props;
    return (
        <div style={{ margin: "20px 0px 40px 0px" }}>
            <Tabs defaultActiveKey="mota" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="mota" title="Mô tả">
                    <div dangerouslySetInnerHTML={{ __html: product.productInfo }} />
                </Tab>
                <Tab eventKey="thongtin" title="Thông tin">
                    Thông tin về sản phẩm
                </Tab>
                <Tab eventKey="danhgia" title="Đánh giá">
                    Đánh giá của người dùng
                </Tab>
            </Tabs>
        </div>
    );
}
