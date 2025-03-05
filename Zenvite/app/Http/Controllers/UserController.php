<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function index()
    {
        $users = DB::select("SELECT * FROM users ORDER BY id ASC");

        return response()->json(['users' => $users], 200);
    }

    public function getUserById($id)
    {
        $user = DB::select("SELECT * FROM users WHERE id = ?", [$id]);

        if (empty($user)) {
            return response()->json(['message' => 'User not found'], 404);
        }

        return response()->json(['user' => $user[0]]);
    }
}
