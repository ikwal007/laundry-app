import { Inertia } from "@inertiajs/inertia";
import React, { useState } from "react";

const FormOrderCreate = ({ listJenisPakaian }) => {
    const [values, setValues] = useState({
        nama_pelanggan: "",
        jenis_pakaian: "",
        timbangan: 0,
        status: "",
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
        e.preventDefault()
        Inertia.post('/order', values)
      }

    console.log(values);

    return (
        <form className="flex" onSubmit={handleSubmit}>
            <div className="basis-1/2 space-y-6">
                <div className="form-control w-full max-w-xs">
                    <label className="label">Nama Pelanggan?</label>
                    <input
                        id="nama_pelanggan"
                        type="text"
                        value={values.nama_pelanggan}
                        onChange={handleChange}
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                        required
                    />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">Jenis Pakaian?</label>
                    <select
                        id="jenis_pakaian"
                        value={values.jenis_pakaian}
                        onChange={handleChange}
                        className="select select-bordered"
                        required
                    >
                        <option></option>
                        {listJenisPakaian.length > 0 ? (
                            listJenisPakaian.map((jenisPakaian, i) => {
                                return (
                                    <option
                                        key={i}
                                        value={jenisPakaian.id}
                                        data={jenisPakaian.harga}
                                    >
                                        {jenisPakaian.jenis}
                                    </option>
                                );
                            })
                        ) : (
                            <option>kosong</option>
                        )}
                    </select>
                </div>
            </div>
            <div className="basis-1/2 space-y-6">
                <div className="form-control w-full max-w-xs">
                    <label className="label">Timbangan?</label>
                    <input
                        id="timbangan"
                        type="number"
                        onChange={handleChange}
                        value={values.timbangan}
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                        required
                    />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">Setatus?</label>
                    <select
                        id="status"
                        onChange={handleChange}
                        value={values.status}
                        className="select select-bordered"
                        required
                    >
                        <option></option>
                        <option>dicuci</option>
                        <option>selesai</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-outline btn-info">
                    Simpan & Cetak Struk
                </button>
            </div>
        </form>
    );
};

export default FormOrderCreate;
