<?php

namespace App\Http\Controllers;

use App\Services\AuthService;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    protected $authService;

    public function __construct(AuthService $authService)
    {
        $this->authService = $authService;
    }
    
    public function register(Request $request)
    {
        $response = $this->authService->register($request->all());

        if (isset($response['error'])) {
            return response()->json(['message' => $response['error']], 400);
        }

        return response()->json($response, 201);
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $response = $this->authService->login($credentials);

        if (isset($response['error'])) {
            return response()->json(['message' => $response['error']], 401);
        }

        return response()->json($response);
    }

    public function logout(Request $request)
    {
        return response()->json($this->authService->logout($request));
    }

    public function destroy($id)
    {
        $response = $this->authService->destroy($id);

        if (isset($response['error'])) {
            return response()->json(['message' => $response['error']], 404);
        }

        return response()->json($response);
    }
}
