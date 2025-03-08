<?php

namespace App\Services;

use Illuminate\Support\Facades\DB;

class BookingService
{
    public function bookEvent(array $data)
    {
        DB::insert("
            INSERT INTO bookings (user_id, event_id, full_name, email, phone, ticket_number, transaction_id, total_amount, created_at, updated_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())",
            [
                $data['user_id'],
                $data['event_id'],
                $data['fullName'],
                $data['email'],
                $data['phone'],
                $data['ticketNumber'],
                $data['transactionId'],
                $data['totalAmount']
            ]
        );

        return ['message' => 'Booking successful!'];
    }

    public function userBookings($user_id)
    {
        $bookings = DB::select("
            SELECT b.id as booking_id, b.user_id, b.event_id, b.ticket_number, b.total_amount, 
                   e.eventName as event_name, e.address, e.date, e.time, e.poster
            FROM bookings b
            JOIN events e ON b.event_id = e.id
            WHERE b.user_id = ?
        ", [$user_id]);

        foreach ($bookings as $booking) {
            $booking->poster = $booking->poster ? url('storage/' . $booking->poster) : url('storage/default-event.jpg');
        }

        return ['bookings' => $bookings];
    }

    public function getEventRegistrations($event_id)
    {
        $bookings = DB::select("
            SELECT b.id as booking_id, b.user_id, b.event_id, e.eventName as event_name, 
                   b.full_name, b.email, b.phone, b.transaction_id, b.ticket_number 
            FROM bookings b
            JOIN events e ON b.event_id = e.id
            WHERE b.event_id = ?
        ", [$event_id]);

        return ['bookings' => $bookings];
    }

    public function deleteBooking($booking_id)
    {
        $booking = DB::table('bookings')->where('id', $booking_id)->first();

        if (!$booking) {
            return ['error' => 'Booking not found'];
        }

        DB::table('bookings')->where('id', $booking_id)->delete();

        return ['message' => 'Booking canceled successfully'];
    }
}
