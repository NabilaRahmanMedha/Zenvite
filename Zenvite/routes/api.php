<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\BookingController;

Route::post('/register', [AuthController::class, 'register']);

Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);


Route::post('/events', [EventController::class, 'store']);
Route::get('/events', [EventController::class, 'index']);
Route::get('/events/{id}', [EventController::class, 'show']);


Route::get('/users', [UserController::class, 'index']);


Route::delete('/users/{id}', [AuthController::class, 'destroy']);

Route::delete('events/{id}', [EventController::class, 'destroy']);

Route::post('/bookings', [BookingController::class, 'bookEvent']);
Route::get('/my-bookings', [BookingController::class, 'userBookings']);
