<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/authenticate/login', [AuthController::class, 'login']);
Route::post('/authenticate/login', [AuthController::class, 'ajaxLogin']);