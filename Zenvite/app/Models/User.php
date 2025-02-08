<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Relations\HasMany;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    // Table name (Laravel assumes "users" by default, so this is optional)
    protected $table = 'users';

    // Primary key
    protected $primaryKey = 'id';

    // Enable auto-incrementing
    public $incrementing = true;

    // Primary key type
    protected $keyType = 'int';

    // Enable timestamps (created_at, updated_at)
    public $timestamps = true;

    // Mass assignable attributes
    protected $fillable = ['name', 'email', 'password'];

    // Hidden attributes (for security)
    protected $hidden = ['password', 'remember_token'];

    // Cast attributes
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    // Define relationship with the Post model
    public function posts(): HasMany
    {
        return $this->hasMany(Post::class);
    }
}
