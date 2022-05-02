<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Events\Message;

class MessageController extends Controller
{
    public function broadcast(Request $request)
    {

        if (!$request->filled('message')) {
            return response()->json([
                'message' => 'No message to send'
            ], 422);
        };

        $user = ['name' => 'guest', 'id' => 0];

        if ($request->filled('user')) {
            $user = $request->user;
        };

        Message::dispatch($request->message, $user);


        return response()->json([], 200);
    }
}
