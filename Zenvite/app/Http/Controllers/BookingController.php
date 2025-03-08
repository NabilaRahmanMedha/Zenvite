<?php

namespace App\Http\Controllers;

use App\Services\BookingService;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    protected $bookingService;

    public function __construct(BookingService $bookingService)
    {
        $this->bookingService = $bookingService;
    }

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

        return response()->json($this->bookingService->bookEvent($request->all()), 201);
    }

    public function userBookings($user_id)
    {
        return response()->json($this->bookingService->userBookings($user_id), 200);
    }

    public function getEventRegistrations($event_id)
    {
        return response()->json($this->bookingService->getEventRegistrations($event_id), 200);
    }

    public function getTicketSales()
    {
        $ticketSales = $this->bookingService->getTicketSales();
        return response()->json($ticketSales, 200);
    }

    public function deleteBooking($booking_id)
    {
        $response = $this->bookingService->deleteBooking($booking_id);

        if (isset($response['error'])) {
            return response()->json(['message' => $response['error']], 404);
        }

        return response()->json($response, 200);
    }
}
