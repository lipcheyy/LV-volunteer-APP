<?php

namespace App\Http\Controllers\Admin\Volunteer;

use App\Http\Controllers\Controller;
use App\Models\VolunteerStatus;
use Illuminate\Http\Request;

class VolunteerController extends Controller
{
    public function index(){
        $volunteerRequests=VolunteerStatus::all();
        return $volunteerRequests;
    }
}
