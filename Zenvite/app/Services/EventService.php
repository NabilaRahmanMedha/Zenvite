<?php

namespace App\Services;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class EventService
{
    public function storeEvent(array $data)
    {
        $posterPath = null;
        if (isset($data['poster']) && $data['poster']->isValid()) {
            $posterPath = $data['poster']->store('posters', 'public');
        }

        $eventId = DB::table('events')->insertGetId([
            'eventName' => $data['eventName'],
            'address' => $data['address'],
            'ticketPrice' => $data['ticketPrice'],
            'date' => $data['date'],
            'time' => $data['time'],
            'description' => $data['description'],
            'poster' => $posterPath,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        return $this->getEventById($eventId);
    }

    public function getEvents($filters)
    {
        $query = DB::table('events');

        if (isset($filters['search'])) {
            $query->where('eventName', 'LIKE', "%{$filters['search']}%")
                  ->orWhere('address', 'LIKE', "%{$filters['search']}%");
        }

        if (isset($filters['featured']) && $filters['featured'] == 'true') {
            $events = $query->inRandomOrder()->limit(8)->get();
        } elseif (isset($filters['admin']) && $filters['admin'] == 'true') {
            $events = $query->get();
        } else {
            $events = $query->get();
        }

        foreach ($events as $event) {
            $event->poster = $event->poster ? url('storage/' . $event->poster) : url('storage/default-event.jpg');
        }

        return $events;
    }

    public function getEventById($id)
    {
        $event = DB::table('events')->where('id', $id)->first();

        if ($event) {
            $event->poster = $event->poster ? url('storage/' . $event->poster) : url('storage/default-event.jpg');
        }

        return $event;
    }

    public function deleteEvent($id)
    {
        $event = DB::table('events')->where('id', $id)->first();

        if (!$event) {
            return ['error' => 'Event not found.'];
        }

        DB::table('events')->where('id', $id)->delete();

        return ['message' => 'Event deleted successfully.'];
    }
}
