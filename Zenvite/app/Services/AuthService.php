<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthService
{
    public function register(array $data)
    {
        $validator = Validator::make($data, [
            'userName' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return ['error' => $validator->errors()];
        }

        User::create([
            'name' => $data['userName'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);

        return ['message' => 'User registered successfully'];
    }

    public function login(array $credentials)
    {
        $user = User::where('email', $credentials['email'])->first();

        if (!$user || !Hash::check($credentials['password'], $user->password)) {
            return ['error' => 'Invalid credentials'];
        }

        $token = $user->createToken('authToken')->plainTextToken;

        return [
            'message' => 'Login successful',
            'token' => $token,
            'user' => $user
        ];
    }

    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();
        return ['message' => 'Logged out successfully'];
    }

    public function destroy($id)
    {
        $user = User::find($id);

        if (!$user) {
            return ['error' => 'User not found'];
        }

        $user->delete();

        return ['message' => 'User deleted successfully'];
    }
}
