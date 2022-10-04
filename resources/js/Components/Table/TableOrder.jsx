import React from "react";
import OrderList from "@/Components/List/OrderList";

const TableOrder = ({orderList, jenislist}) => {
    return (
        <div className="overflow-x-auto">
            <table className="table w-full table-auto">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name Pelanggan</th>
                        <th>Jenis Pakaian</th>
                        <th>Timbangan</th>
                        <th>Harga</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <OrderList orderList={orderList} jenislist={jenislist}/>
                </tbody>
            </table>
        </div>
    );
};

export default TableOrder;
