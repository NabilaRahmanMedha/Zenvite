<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class EventController extends Controller
{
    // Store a new event
    public function store(Request $request)
    {
        $request->validate([
            'eventName' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'ticketPrice' => 'required|numeric|min:0',
            'date' => 'required|date',
            'time' => 'required',
            'description' => 'required|string',
            'poster' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
        ]);

        // Handle poster upload manually with Storage
        $posterPath = null;
        if ($request->hasFile('poster')) {
            $posterPath = $request->file('poster')->store('posters', 'public');
        }

        // Use DB::table to insert
        $eventId = DB::table('events')->insertGetId([
            'eventName' => $request->eventName,
            'address' => $request->address,
            'ticketPrice' => $request->ticketPrice,
            'date' => $request->date,
            'time' => $request->time,
            'description' => $request->description,
            'poster' => $posterPath,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // Fetch the newly created event using DB::table
        $event = DB::table('events')->where('id', $eventId)->first();

        // Format poster URL manually
        $event->poster = $event->poster ? url('storage/' . $event->poster) : url('storage/default-event.jpg');

        return response()->json(['message' => 'Event created successfully!', 'event' => $event], 201);
    }

    // Fetch a list of events with pagination and search functionality
    public function index(Request $request)
    {
        $query = DB::table('events');

        // Search functionality
        if ($request->has('search')) {
            $search = $request->search;
            $query->where('eventName', 'LIKE', "%$search%")
                  ->orWhere('address', 'LIKE', "%$search%");
        }

        // Featured events handling
        if ($request->has('featured') && $request->featured == 'true') {
            // Fetch random featured events
            $events = $query->inRandomOrder()->limit(6)->get();
            foreach ($events as $event) {
                $event->poster = $event->poster ? url('storage/' . $event->poster) : url('storage/default-event.jpg');
            }
            return response()->json(['events' => $events], 200);
        }

        // Admin events handling (fetch all events)
        if ($request->has('admin') && $request->admin == 'true') {
            $events = $query->get();
            foreach ($events as $event) {
                $event->poster = $event->poster ? url('storage/' . $event->poster) : url('storage/default-event.jpg');
            }
            return response()->json(['events' => $events], 200);
        }

        // Paginated events for normal users
        $events = $query->paginate(8);
        foreach ($events as $event) {
            $event->poster = $event->poster ? url('storage/' . $event->poster) : url('storage/default-event.jpg');
        }

        return response()->json($events, 200);
    }

    // Fetch a single event by its ID
    public function show($id)
    {
        // Fetch event by ID
        $event = DB::table('events')->where('id', $id)->first();

        if (!$event) {
            return response()->json(['message' => 'Event not found'], 404);
        }

        // Format poster URL manually
        $event->poster = $event->poster ? url('storage/' . $event->poster) : url('storage/default-event.jpg');

        return response()->json(['event' => $event], 200);
    }

    // Delete an event by its ID
    public function destroy($id)
    {
        // Fetch event by ID
        $event = DB::table('events')->where('id', $id)->first();

        if (!$event) {
            return response()->json(['message' => 'Event not found.'], 404);
        }

        // Delete the event
        DB::table('events')->where('id', $id)->delete();

        return response()->json(['message' => 'Event deleted successfully.']);
    }
}
