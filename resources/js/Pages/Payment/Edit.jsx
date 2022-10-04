import Loged from "@/Layouts/Loged";
import { Inertia } from "@inertiajs/inertia";
import { Head, Link } from "@inertiajs/inertia-react";
import React, { useState } from "react";

const Edit = (props) => {
    const [dataOrder] = useState({
        nama_pelanggan: props.dataOrder.nama_pelanggan,
        harga: props.dataOrder.harga,
        timbangan: props.dataOrder.timbangan,
    });

    function handleSubmit(e) {
        e.preventDefault()
        Inertia.put(`/payment/${props.dataOrder.id}`, dataOrder)
      }
    return (
        <Loged
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Order
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="flex flex-col space-y-6">
                                <form onSubmit={handleSubmit}>
                                    <div className="flex flex-col space-y-6">
                                        <input
                                            id="nama_pelanggan"
                                            type="text"
                                            placeholder="You can't touch this"
                                            defaultValue={
                                                dataOrder.nama_pelanggan
                                            }
                                            className="input input-bordered w-full max-w-xs"
                                            disabled
                                        />
                                        <div className="form-control">
                                            <label className="input-group input-group-md">
                                                <span>Rp.</span>
                                                <input
                                                    id="harga"
                                                    type="text"
                                                    placeholder="Type here"
                                                    defaultValue={
                                                        dataOrder.harga
                                                    }
                                                    disabled
                                                    className="input input-bordered input-md"
                                                />
                                            </label>
                                        </div>
                                        <div className="form-control">
                                            <label className="input-group input-group-md">
                                                <span>Kg.</span>
                                                <input
                                                    id="timbangan"
                                                    type="text"
                                                    placeholder="Type here"
                                                    defaultValue={
                                                        dataOrder.timbangan
                                                    }
                                                    disabled
                                                    className="input input-bordered input-md"
                                                />
                                            </label>
                                        </div>
                                        <button type="submit" className="btn btn-outline btn-success max-w-xs">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Loged>
    );
};

export default Edit;
