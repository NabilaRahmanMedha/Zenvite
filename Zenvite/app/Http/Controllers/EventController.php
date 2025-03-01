<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class EventController extends Controller
{
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

        $posterPath = null;
        if ($request->hasFile('poster')) {
            $posterPath = $request->file('poster')->store('posters', 'public');
        }

        $event = Event::create([
            'eventName' => $request->eventName,
            'address' => $request->address,
            'ticketPrice' => $request->ticketPrice,
            'date' => $request->date,
            'time' => $request->time,
            'description' => $request->description,
            'poster' => $posterPath,
        ]);

        return response()->json(['message' => 'Event created successfully!', 'event' => $event], 201);
    }
    
    public function index(Request $request)
    {
        $query = Event::query();

        if ($request->has('featured') && $request->featured == 'true') {
            // Fetch 8 random featured events
            $events = $query->inRandomOrder()->limit(8)->get();
            foreach ($events as $event) {
                $event->poster = $event->poster ? url('storage/' . $event->poster) : url('storage/default-event.jpg');
            }
            return response()->json(['events' => $events], 200);
        }

        if ($request->has('admin') && $request->admin == 'true') {
            // Fetch all events for admin (no pagination)
            $events = $query->get();
            foreach ($events as $event) {
                $event->poster = $event->poster ? url('storage/' . $event->poster) : url('storage/default-event.jpg');
            }
            return response()->json(['events' => $events], 200);
        }

        // Default: Paginated events for normal users
        $events = $query->paginate(8);

        // Convert poster paths to full URLs
        $events->getCollection()->transform(function ($event) {
            $event->poster = $event->poster ? url('storage/' . $event->poster) : url('storage/default-event.jpg');
            return $event;
        });

        return response()->json($events, 200);
    }


    
    public function show($id)
    {
        $event = Event::find($id);

        if (!$event) {
            return response()->json(['message' => 'Event not found'], 404);
        }

        // Append full URL for poster
        $event->poster = $event->poster ? url('storage/' . $event->poster) : url('storage/default-event.jpg');

        return response()->json(['event' => $event], 200);
    }

    public function destroy($id)
    {
        $event = Event::find($id);
        
        if ($event) {
            $event->delete();
            return response()->json(['message' => 'Event deleted successfully.']);
        }
        
        return response()->json(['message' => 'Event not found.'], 404);
    }
}
