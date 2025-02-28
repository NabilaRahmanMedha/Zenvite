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

        if ($request->has('featured')) {

            $events = $query->inRandomOrder()->limit(8)->get();

            return response()->json(['events' => $events], 200); 
        } else {

            $events = $query->paginate(8);
        }

  
        foreach ($events as $event) {
            $event->poster = $event->poster ? url('storage/' . $event->poster) : url('storage/default-event.jpg');
        }
        

        return response()->json($events, 200); 
    }



}
