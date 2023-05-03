<?php

namespace App\Http\Controllers\Wanted;

use App\Http\Controllers\Controller;
use App\Http\Requests\Wanted\StoreRequest;
use Illuminate\Http\Request;

class WantedController extends Controller
{
    public function store(StoreRequest $request){
        $data=$request->validated();
        return dump($data);
    }
}
