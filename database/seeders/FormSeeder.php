<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Support\Facades\File;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Form;
use Carbon\Carbon;
class FormSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $json     = file_get_contents(database_path('seeders/modules.json'));
        $records  = json_decode($json, false);
        Form::create([
             "title"=>"A09",
             "name"=>"نموذج ادراة المشاريع",
             "Strat_History"=>Carbon::create('2025','5','4'),
             "End_History"=>Carbon::create('2025','5','14'),
             "Filed_Forms"=>$json
        ]);
    }
}
