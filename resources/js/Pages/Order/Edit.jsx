import Loged from "@/Layouts/Loged";
import { Inertia } from "@inertiajs/inertia";
import { Head, Link } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import { AiFillEdit, AiOutlineClose } from "react-icons/ai";

const Edit = (props) => {
    const [values, setValues] = useState({
        status: props.OrderList.status,
    });

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        Inertia.put(`/order/${props.OrderList.id}`, values);
    }
    console.log(values);
    return (
        <Loged
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Order Edit
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="flex flex-col space-y-6">
                                <div>
                                    <Link
                                        href="/order"
                                        className="btn btn-outline btn-info"
                                    >
                                        Kembali Keorder
                                    </Link>
                                </div>
                                <div>
                                    <div className="overflow-x-auto">
                                        <form onSubmit={handleSubmit}>
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
                                                        <th>Save</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr
                                                        className="hover"
                                                        key={props.OrderList.id}
                                                    >
                                                        <th>
                                                            {props.OrderList.id}
                                                        </th>
                                                        <td>
                                                            {
                                                                props.OrderList
                                                                    .nama_pelanggan
                                                            }
                                                        </td>
                                                        <td>
                                                            <select
                                                                className="select w-full max-w-xs"
                                                                defaultValue={
                                                                    props
                                                                        .OrderList
                                                                        .jenis_pakaian_id
                                                                }
                                                                disabled
                                                            >
                                                                {props.jenis
                                                                    .length >
                                                                0 ? (
                                                                    props.jenis.map(
                                                                        (
                                                                            jenis
                                                                        ) => {
                                                                            return (
                                                                                <option
                                                                                    value={
                                                                                        jenis.id
                                                                                    }
                                                                                >
                                                                                    {
                                                                                        jenis.jenis
                                                                                    }
                                                                                </option>
                                                                            );
                                                                        }
                                                                    )
                                                                ) : (
                                                                    <></>
                                                                )}
                                                            </select>
                                                        </td>
                                                        <td>
                                                            {
                                                                props.OrderList
                                                                    .timbangan
                                                            }{" "}
                                                            <span>Kg</span>
                                                        </td>
                                                        <td>
                                                            <span>Rp.</span>{" "}
                                                            {
                                                                props.OrderList
                                                                    .harga
                                                            }
                                                        </td>
                                                        <td>
                                                            <div className="form-control w-full max-w-xs">
                                                                <select
                                                                    id="status"
                                                                    onChange={
                                                                        handleChange
                                                                    }
                                                                    value={
                                                                        values.status
                                                                    }
                                                                    className="select select-bordered"
                                                                    required
                                                                >
                                                                    <option></option>
                                                                    <option>
                                                                        dicuci
                                                                    </option>
                                                                    <option>
                                                                        selesai
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </td>
                                                        <td className="flex">
                                                            <button
                                                                type="submite"
                                                                className="btn btn-square btn-outline btn-sm"
                                                            >
                                                                <AiFillEdit />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Loged>
    );
};

export default Edit;
