<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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

        // Insert booking record into the database
        DB::insert("
            INSERT INTO bookings (user_id, event_id, full_name, email, phone, ticket_number, transaction_id, total_amount, created_at, updated_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())",
            [
                $request->user_id,
                $request->event_id,
                $request->fullName,
                $request->email,
                $request->phone,
                $request->ticketNumber,
                $request->transactionId,
                $request->totalAmount
            ]
        );

        return response()->json(['message' => 'Booking successful!'], 201);
    }

    public function userBookings($user_id)
    {
        // Fetch bookings for the user
        $bookings = DB::select("
            SELECT b.id as booking_id, b.user_id, b.event_id, e.eventName as event_name, 
                   e.address, e.date, e.time 
            FROM bookings b
            JOIN events e ON b.event_id = e.id
            WHERE b.user_id = ?
        ", [$user_id]);

        return response()->json(['bookings' => $bookings], 200);
    }

    public function getEventRegistrations($event_id)
    {
        // Fetch registrations for a specific event
        $bookings = DB::select("
            SELECT b.id as booking_id, b.user_id, b.event_id, e.eventName as event_name, 
                   b.full_name, b.email, b.phone, b.transaction_id, b.ticket_number 
            FROM bookings b
            JOIN events e ON b.event_id = e.id
            WHERE b.event_id = ?
        ", [$event_id]);

        return response()->json(['bookings' => $bookings], 200);
    }
}
