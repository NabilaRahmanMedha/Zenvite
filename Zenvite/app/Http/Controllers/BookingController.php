<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Booking;
use App\Models\User;

class BookingController extends Controller
{
    public function bookEvent(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'event_id' => 'required|exists:events,id',
            'fullName' => 'required|string',
            'email' => 'required|email',
            'phone' => 'required|string',
            'ticketNumber' => 'required|integer|min:1',
            'transactionId' => 'required|string',
            'totalAmount' => 'required|numeric|min:1',
        ]);

        $booking = Booking::create([
            'user_id' => $request->user_id, // Getting user_id from request instead of Auth
            'event_id' => $request->event_id,
            'full_name' => $request->fullName,
            'email' => $request->email,
            'phone' => $request->phone,
            'ticket_number' => $request->ticketNumber,
            'transaction_id' => $request->transactionId,
            'total_amount' => $request->totalAmount,
        ]);

        return response()->json(['message' => 'Booking successful!', 'booking' => $booking], 201);
    }

    public function userBookings(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
        ]);

        $bookings = Booking::where('user_id', $request->user_id)->get();
        
        return response()->json(['bookings' => $bookings]);
    }
}
