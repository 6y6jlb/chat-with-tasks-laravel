<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Events\Message;
use App\Http\Resources\MessageResource;
use App\Models\ChatMessage;

class MessageController extends Controller
{
    public function broadcast(Request $request)
    {
        $request->validate([
            'message' => 'required|min:3',
            'user' => 'nullable',
        ]);

        $user = ['name' => 'guest', 'id' => 0];
        $text = $request->message;

        if ($request->filled('user')) {
            $user = $request->user;
        };
       
        $messageModel = new ChatMessage([
            'user_id'=> $user['id'],
            'user_name'=> $user['name'],
            'text'=> $text,
        ]);

        $messageModel->save();

        Message::dispatch($messageModel);

        return response()->json([], 200);
    }

    public function messages(Request $request) {

        $resource = MessageResource::collection(ChatMessage::orderBy('id','desc')->take(5)->get());

        return  $resource;
    }
}
