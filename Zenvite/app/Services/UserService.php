<?php

namespace App\Services;

use Illuminate\Support\Facades\DB;

class UserService
{
    public function getAllUsers()
    {
        return DB::select("SELECT * FROM users ORDER BY id ASC");
    }

    public function getUserById($id)
    {
        $user = DB::select("SELECT * FROM users WHERE id = ?", [$id]);

        return empty($user) ? null : $user[0];
    }
}
