import TableOrder from "@/Components/Table/TableOrder";
import Loged from "@/Layouts/Loged";
import { Head, Link } from "@inertiajs/inertia-react";
import React from "react";

const Index = (props) => {
    console.log(props);
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
                                <div>
                                    <Link href="/order/create" className="btn btn-outline btn-info">
                                        Tambah Order
                                    </Link>
                                </div>
                                <div>
                                    <TableOrder orderList={props.OrderList} jenislist={props.jenis} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Loged>
    );
};

export default Index;
