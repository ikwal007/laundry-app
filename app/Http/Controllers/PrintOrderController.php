<?php

namespace App\Http\Controllers;

use App\Models\JenisPakaian;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class PrintOrderController extends Controller
{
    /**
     * Print bill
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $req)
    {
        if ($req->session()->get('message')) {
            $dataPrint = DB::table('orders')->latest()->first();
            $jenisBaju = DB::table('jenis_pakaians')->where('id', $req->session()->get('message'))->first();
            $dataPrint->jenis_pakaian_id = $jenisBaju->jenis;
            return Inertia::render('Print/PrintOrder', [
                'dataPrint' => $dataPrint
            ]);
        } else {
            return back();
        }
    }
}
