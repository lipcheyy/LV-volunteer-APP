<?php

namespace App\Http\Controllers\Admin\Volunteer;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\VolunteerStatus;
use Illuminate\Http\Request;

class VolunteerController extends Controller
{
    public function index(){
        $volunteerRequests=VolunteerStatus::all();
        return $volunteerRequests;
    }
    public function update(User $user){
        $data=\request()->validate(['role'=>'integer',
        'card'=>'integer']);
        $user->update($data);
        VolunteerStatus::where('user_id',$user->id)->delete();
        return $user;
    }
    public function disapprove(VolunteerStatus $volunteerStatus){
        $volunteerStatus->delete();
        return response()->json(['message'=>'disaprove']);
    }
}
