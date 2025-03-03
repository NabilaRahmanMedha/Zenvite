<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Booking;
use App\Models\User;
use App\Models\Event;

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
            'user_id' => $request->user_id, 
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

    public function getEventRegistrations($event_id)
{
    $bookings = Booking::where('event_id', $event_id)
        ->join('events', 'bookings.event_id', '=', 'events.id') 
        ->select(
            'bookings.id as booking_id', 
            'bookings.user_id', 
            'bookings.event_id', 
            'events.eventName as event_name', 
            'bookings.full_name', 
            'bookings.email', 
            'bookings.phone', 
            'bookings.transaction_id', 
            'bookings.ticket_number'
        )
        ->get();
    
    return response()->json(['bookings' => $bookings], 200);
}

}
