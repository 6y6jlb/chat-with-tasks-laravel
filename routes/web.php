<?php

use App\Http\Controllers\ProjectController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Auth::routes();

Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

// Route::name('projects.')->group(function () {
//     Route::view('/', [App\Http\Controllers\ProjectsController::class], 'index')->name('projects');
// });

// Route::name('project.')->group(function () {
//     Route::get('/{id}', [ProjectController::class], 'index')->middleware('auth')->name('project');
// });
