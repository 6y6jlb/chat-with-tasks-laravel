<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'email' => 'required|string',
            'password' => 'required|string|min:4|max:50',
        ]);

        $user = new User([
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => Role::USER,
        ]);

        $user->save();

        $token = $user->createToken('myAppToken')->plainTextToken;

        return response()->json([
            'message' => 'You are succesfully registered. User your email and password to sign in.',
            'token' => $token,
            'user' => $user
        ], 200);
    }

    public function login(Request $request)
    {
        $fileds = $request->validate([
            'email' => 'required',
            'password' => 'required|string',
        ]);

        $user = User::where('email', $fileds['email'])->first();

        if (!$user || !Hash::check($fileds['password'], $user->password)) {
            return response()->json([
                'message' => 'You cannot sign with those credentials',
                'errors' => 'Unauthorised'
            ], 401);
        }

        $token = $user->createToken('myAppToken')->plainTextToken;

        return response()->json([
            'message' => 'done',
            'token' => $token,
            'user' => $user
        ], 201);
    }

    public function logout(Request $request, $id)
    {
        $user = User::findOrFail($id);

        if (!$user) {
            return response()->json([
                'message' => 'fail',
            ], 404);
        }

        $user->tokens()->delete();
        $user->save();

        return response()->json([
            'message' => 'done',
        ], 200);
    }
}
