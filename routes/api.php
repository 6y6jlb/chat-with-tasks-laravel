<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::group(['middleware'=> ['auth:sanctum']], function() {
    Route::get('projects',  [App\Http\Controllers\ProjectController::class, 'index']);
});

// protected routes
Route::group(['prefix'=>'auth'], function() {
    Route::post('login', [App\Http\Controllers\AuthController::class, 'login']);
    Route::post('register', [App\Http\Controllers\AuthController::class, 'register']);
});

//  Route::get('projects',  [App\Http\Controllers\ProjectController::class, 'index']);

 Route::get('project/{id}', [App\Http\Controllers\ProjectController::class,'show']);

 Route::post('project', [App\Http\Controllers\ProjectController::class, 'store']);

 Route::put('project/{id}',  [App\Http\Controllers\ProjectController::class, 'update']);

 Route::delete('project/{id}',  [App\Http\Controllers\ProjectController::class, 'delete']);




