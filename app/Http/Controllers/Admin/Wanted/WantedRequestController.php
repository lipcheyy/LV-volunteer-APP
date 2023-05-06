<?php

namespace App\Http\Controllers\Admin\Wanted;

use App\Http\Controllers\Controller;
use App\Http\Resources\Wanted\WantedResource;
use App\Models\Wanted;
use Illuminate\Http\Request;

class WantedRequestController extends Controller
{
    public function index(){
        $wanteds=Wanted::where('approved',false)->get();
        return WantedResource::collection($wanteds);
    }
    public function update(Wanted $wanted){
        $data=\request()->validate([
            'approved'=>'boolean'
        ]);
        $wanted->update($data);
        return dump($wanted);
    }
}
