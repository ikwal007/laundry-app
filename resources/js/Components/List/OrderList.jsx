import React from "react";
import TableOrder from "@/Components/Table/TableOrder";
import { AiFillEdit, AiOutlineClose } from "react-icons/ai";
import { Link } from "@inertiajs/inertia-react";
import { MdPayment } from "react-icons/md";

const OrderList = ({ orderList, jenislist }) => {
    return (
        <>
            {orderList.length > 0 ? (
                orderList.map((order) => {
                    return (
                        <tr className="hover" key={order.id}>
                            <th>{order.id}</th>
                            <td>{order.nama_pelanggan}</td>
                            <td>
                                <select
                                    className="select w-full max-w-xs"
                                    defaultValue={order.jenis_pakaian_id}
                                    disabled
                                >
                                    {jenislist.length > 0 ? (
                                        jenislist.map((jenis) => {
                                            return (
                                                <option value={jenis.id}>
                                                    {jenis.jenis}
                                                </option>
                                            );
                                        })
                                    ) : (
                                        <></>
                                    )}
                                </select>
                            </td>
                            <td>
                                {order.timbangan} <span>Kg</span>
                            </td>
                            <td>
                                <span>Rp.</span> {order.harga}
                            </td>
                            <td>
                                <div
                                    className={`badge gap-2 ${
                                        order.status == "dicuci"
                                            ? "badge-warning"
                                            : "badge-success"
                                    }`}
                                >
                                    <AiOutlineClose />
                                    {order.status}
                                </div>
                            </td>
                            <td className="flex">
                                {route().current("payment.*") ? (
                                    <Link
                                        href={`payment/${order.id}/edit`}
                                        className="btn btn-square btn-outline btn-sm"
                                    >
                                        <MdPayment />
                                    </Link>
                                ) : (
                                    <Link
                                        href={`order/${order.id}/edit`}
                                        className="btn btn-square btn-outline btn-sm"
                                    >
                                        <AiFillEdit />
                                    </Link>
                                )}
                            </td>
                        </tr>
                    );
                })
            ) : (
                <p className="text-black font-bold self-center">Empty</p>
            )}
        </>
    );
};

export default OrderList;
