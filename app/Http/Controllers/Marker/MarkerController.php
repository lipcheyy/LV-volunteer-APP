<?php

namespace App\Http\Controllers\Marker;

use App\Http\Controllers\Controller;
use App\Http\Requests\Marker\StoreRequest;
use Illuminate\Http\Request;

class MarkerController extends Controller
{
    public function store(StoreRequest $request){
//        $data=$request->validated();
        $data=\request()->all();
        return dump($data);
    }
}
