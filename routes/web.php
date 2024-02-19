<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/
Route::get('assets/{path}', function ($path) {
	return response()->file(public_path("assets/$path"));
});
Route::get('/{any?}/{slug?}', function () {
	return view('welcome');
});
