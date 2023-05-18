<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\DataRequest;
use App\Http\Resources\User\UserResource;
use App\Models\User;
use Illuminate\Http\Request;

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



}
