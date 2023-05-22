<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\DataRequest;
use App\Http\Requests\User\UpdateDataRequest;
use App\Http\Resources\Donation\DonationResource;
use App\Http\Resources\User\UserResource;
use App\Models\Goal;
use App\Models\Post;
use App\Models\User;
use App\Models\VolunteerStatus;
use App\Models\Wanted;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class DataController extends Controller
{
    public function liked(){
        return auth()->user()->likes;
    }
    public function data(DataRequest $request)
    {$data=$request->validated();
        $user=User::where('id',$data['id'])->first();
        return $user;
    }
    public function getUsersOwnDonations(){
        $users_donations=auth()->user()->donations;
        return DonationResource::collection($users_donations);
    }
    public function updateData(UpdateDataRequest $request){
        $data=$request->validated();
        $data['password']=Hash::make($data['password']);
        $email=auth()->user()->email;
        $user=[
            'email'=>$email,
            'password'=>$data['old_password']
        ];
        if (!auth()->attempt($user)){
            return response()->json(['error'=>'wrong old password']);
        };
        User::where('email',$email)->update(['password'=>$data['password']]);
    }
    public function getNotifications(){
        $notifications=[
            'category_count'=>Goal::count(),
            'users_count'=>User::count(),
            'news'=>Post::count(),
            'wanteds_count'=>Wanted::count(),
            'volunteer_requests_count'=>VolunteerStatus::count(),
            'wanted_request_count'=>Wanted::where('approved',0)->count()
        ];
        return $notifications;
    }
    public function updateUsername(){
        $data=\request()->validate(['name'=>'string']);
        $user=auth()->user();
        $user->update(['name'=>$data['name']]);
        return response()->json(['message'=>'success']);
    }


}
