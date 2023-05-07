<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VolunteerStatus extends Model
{
    use HasFactory;
    protected $guarded=[];
    protected $table='volunteer_status_request';
}
