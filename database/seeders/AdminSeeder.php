<?php

namespace Database\Seeders;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
      $user= User::create([
            'name' => 'admin',
            'email' => 'admin@admin.com',
            'email_verified_at' => now(),
            'password' => '$2y$10$w1V.yjt/qoPz2.WW1WK.n.iKnhyW2ljrtTjNJSYIUq62CXmvE5EQa', // password
        ]);
        $user->assignRole("admin");
    }
}
