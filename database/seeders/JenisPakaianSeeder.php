<?php

namespace Database\Seeders;

use App\Models\JenisPakaian;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class JenisPakaianSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        JenisPakaian::create([
            'jenis' => 'Katun',
            'harga_perkilo' => '3000',
        ]);
        JenisPakaian::create([
            'jenis' => 'Linen ',
            'harga_perkilo' => '4500',
        ]);
        JenisPakaian::create([
            'jenis' => 'Denim ',
            'harga_perkilo' => '5000',
        ]);
        JenisPakaian::create([
            'jenis' => 'sutra ',
            'harga_perkilo' => '6000',
        ]);
        JenisPakaian::create([
            'jenis' => 'wool ',
            'harga_perkilo' => '6000',
        ]);
        JenisPakaian::create([
            'jenis' => 'jersey  ',
            'harga_perkilo' => '5500',
        ]);
    }
}
