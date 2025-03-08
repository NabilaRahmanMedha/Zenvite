<?php

namespace App\Http\Controllers;

use App\Services\EventService;
use Illuminate\Http\Request;

class EventController extends Controller
{
    protected $eventService;

    public function __construct(EventService $eventService)
    {
        $this->eventService = $eventService;
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'eventName' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'ticketPrice' => 'required|numeric|min:0',
            'date' => 'required|date',
            'time' => 'required',
            'description' => 'required|string',
            'poster' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
        ]);

        $validatedData['poster'] = $request->file('poster');

        $event = $this->eventService->storeEvent($validatedData);

        return response()->json(['message' => 'Event created successfully!', 'event' => $event], 201);
    }

    public function index(Request $request)
    {
        $filters = $request->all();
        $events = $this->eventService->getEvents($filters);

        return response()->json(['events' => $events], 200);
    }

    public function show($id)
    {
        $event = $this->eventService->getEventById($id);

        if (!$event) {
            return response()->json(['message' => 'Event not found'], 404);
        }

        return response()->json(['event' => $event], 200);
    }

    public function destroy($id)
    {
        $response = $this->eventService->deleteEvent($id);

        if (isset($response['error'])) {
            return response()->json(['message' => $response['error']], 404);
        }

        return response()->json($response);
    }
}
