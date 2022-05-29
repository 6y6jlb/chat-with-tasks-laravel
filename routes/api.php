<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

// auth
Route::group(['prefix' => 'auth'], function () {
    Route::post('login', [App\Http\Controllers\AuthController::class, 'login']);
    Route::get('logout/{id}', [App\Http\Controllers\AuthController::class, 'logout']);
    Route::post('register', [App\Http\Controllers\AuthController::class, 'register']);
});


//public routes
Route::get('/projects',  [App\Http\Controllers\ProjectController::class, 'index']);
Route::get('project/{id}', [App\Http\Controllers\ProjectController::class, 'show']);
Route::post('project', [App\Http\Controllers\ProjectController::class, 'store']);
Route::put('project/{id}',  [App\Http\Controllers\ProjectController::class, 'update']);
Route::delete('project/{id}',  [App\Http\Controllers\ProjectController::class, 'delete']);

Route::post('/message', [App\Http\Controllers\MessageController::class, 'broadcast']);


// protected routes

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/user', function (Request $request) { 
        return $request->user();
    });
    Route::get('/messages', [App\Http\Controllers\MessageController::class, 'messages']);
});
