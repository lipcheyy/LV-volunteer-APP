<?php

namespace App\Http\Controllers\VolunteerRoleRequest;

use App\Http\Controllers\Controller;
use App\Http\Requests\VolunteerRoleRequest\VolunteerRoleRequest;
use App\Models\VolunteerStatus;
use Illuminate\Http\Request;

class VolunteerRoleController extends Controller
{
    public function store(VolunteerRoleRequest $request){
        $data=$request->validated();
        $user=auth()->user()->id;
        $data['user_id']=$user;
        VolunteerStatus::create($data);
        return response()->json(['message'=>'заявку успішно подано']);
    }
}
