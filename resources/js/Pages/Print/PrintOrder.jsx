import Loged from "@/Layouts/Loged";
import { Head, Link } from "@inertiajs/inertia-react";
import React, { useRef } from "react";
import ReactToPrint from "react-to-print";

const PrintOrder = (props) => {
    const componentRef = useRef();
    console.log(props);
    return (
        <Loged
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="flex flex-col space-y-6">
                                <div className="space-x-6">
                                    <Link
                                        href="/order"
                                        className="btn btn-outline btn-info"
                                    >
                                        Back To Order
                                    </Link>
                                    <ReactToPrint
                                        trigger={() => (
                                            <button className="btn btn-outline btn-info">Print this out!</button>
                                        )}
                                        content={() => componentRef.current}
                                    />
                                </div>
                                <div>
                                    <div ref={componentRef}>
                                        <h1>Nama Pelanggan : {props.dataPrint.nama_pelanggan}</h1>
                                        <h1>Jenis Pakaian : {props.dataPrint.jenis_pakaian_id}</h1>
                                        <h1>Timbangan : {props.dataPrint.timbangan}</h1>
                                        <h1>harga : {props.dataPrint.harga}</h1>
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

export default PrintOrder;
