<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Role;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [
            ['email' => 'a.basalov@a3f.ru', 'role' => Role::ADMIN, 'pass' => '12345678'],
            ['email' => 'blocked@vcms.com', 'role' => Role::USER, 'is_blocked' => 1, 'pass' => '12345678'],
            ['email' => 'customer@vcms.com', 'role' => Role::USER, 'pass'=> '12345678'],
            ['email' => 'tl@vcms.com', 'role' => Role::USER, 'pass' => '12345678'],
            ['email' => 'mb@vcms.com', 'role' => Role::GUEST, 'pass' => '12345678'],
        ];

       foreach($users as $user)
       {

        /** @var User $user */
        DB::table('users')->insert([
            'name' => explode('@',$user['email'])[0],
            'email' => $user['email'],
            'role' => $user['role'],
            'password' => $user['pass'],
            'is_blocked'=> $user['is_blocked'] ?? 0
        ]);
       };
    }
}
