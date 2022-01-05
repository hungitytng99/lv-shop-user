import React, { useState } from "react";
import { useEffect } from "react";
import CardHistoryOrder from "src/components-share/Card/CardHistoryOrder/CardHistoryOrder";
import { userService } from "./../../../services/user/index";

export default function HistoryOrders() {
    const [listHistoryOrder, setListHistoryOrder] = useState([]);
    useEffect(() => {
        (async () => {
            const res = await userService.getUserOrders();
            // console.log(res);
            setListHistoryOrder(res.data);
        })();
    }, []);

    return (
        <>
            <h4 className="box_title">Lịch sử đặt hàng</h4>
            <div>
                <div>
                    {listHistoryOrder.map((item, index) => {
                        return (
                            <CardHistoryOrder
                                key={"historycard" + item.id + index}
                                data={item}
                                updateListOrder={(data) => {
                                    setListHistoryOrder(data);
                                }}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
}
