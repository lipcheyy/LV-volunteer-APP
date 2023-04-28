<?php

namespace App\Http\Controllers\Admin\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\StoreRequest;
use App\Models\User;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    public function getRoles(){
        return User::getRole();
    }
    public function index(){
        $users=User::all();
        return $users;
    }
    public function store(StoreRequest $request){
        $data=$request->validate();
    }
}
