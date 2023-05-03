<?php

namespace App\Http\Controllers\Wanted;

use App\Http\Controllers\Controller;
use App\Http\Requests\Wanted\StoreRequest;
use App\Models\Wanted;
use Illuminate\Http\Request;

class WantedController extends Controller
{
    public function store(StoreRequest $request){
        $data=$request->validated();
        $images=$data['images'];
        unset($data['images']);
        $wanted=Wanted::create($data);
        foreach ($images as $image)
        {

        }
        return dump($images);
    }
}
