<?php

namespace App\Http\Controllers;

use App\Models\JenisPakaian;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Order/Index', [
            'OrderList' => DB::table('orders')->get(),
            'jenis' => DB::table('jenis_pakaians')->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Order/Create', [
            'listJenisPakaian' => JenisPakaian::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $jenisPakaian = DB::table('jenis_pakaians')->where('id', $request->jenis_pakaian)->first();
        $harga_total = $request->timbangan * $jenisPakaian->harga_perkilo;
        $data = [
            'nama_pelanggan' => $request->nama_pelanggan,
            'jenis_pakaian_id' => $request->jenis_pakaian,
            'timbangan' => $request->timbangan,
            'harga' => $harga_total,
            'status' => $request->status,
        ];
        Order::create($data);

        return redirect('/print/order')->with('message', $data['jenis_pakaian_id']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function show(Order $order)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function edit(Order $order)
    {
        return Inertia::render('Order/Edit',[
            'OrderList' => $order,
            'jenis' => DB::table('jenis_pakaians')->get()
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Order $order)
    {
        DB::table('orders')
              ->where('id', $order->id)
              ->update(['status' => $request->status]);

        return redirect('/order');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function destroy(Order $order)
    {
        //
    }
}
