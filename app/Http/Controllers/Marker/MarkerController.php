<?php

namespace App\Http\Controllers\Marker;

use App\Http\Controllers\Controller;
use App\Http\Requests\Marker\StoreRequest;
use App\Models\Marker;
use Illuminate\Http\Request;

class MarkerController extends Controller
{
    public function store(StoreRequest $request){
        $data=$request->validated();
        Marker::create($data);
        return dump($data);
    }
    public function getMarkers(){
        $markers=Marker::all();
        return $markers;
    }
}
