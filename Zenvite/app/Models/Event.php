<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    protected $fillable = [
        'eventName',
        'address',
        'ticketPrice',
        'date',
        'time',
        'description',
        'poster',
    ];

    public function scopeSearch($query, $searchTerm)
    {
        return $query->where('eventName', 'like', "%{$searchTerm}%")
                     ->orWhere('address', 'like', "%{$searchTerm}%");
    }
    
}

