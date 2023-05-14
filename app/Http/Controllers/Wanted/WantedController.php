<?php

namespace App\Http\Controllers\Wanted;

use App\Http\Controllers\Controller;
use App\Http\Requests\Wanted\StoreRequest;
use App\Http\Resources\Wanted\WantedResource;
use App\Models\Image;
use App\Models\Wanted;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class WantedController extends Controller
{
    public function index(){
        $wanteds=Wanted::where('approved',true)->get();
        return WantedResource::collection($wanteds);
    }
    public function store(StoreRequest $request){
        $data=$request->validated();
        $images=$data['images'];
        $data['user_id']=auth()->user()->id;
        unset($data['images']);
        $wanted=Wanted::create($data);
        foreach ($images as $image)
        {
            $imageName=md5(Carbon::now() . '_'. $image->getClientOriginalName())
                .'.'.$image->getClientOriginalExtension();
            $imagePath=Storage::disk('public')->putFileAs('/images',$image,$imageName);
            Image::create(
                [
                    'path'=>$imagePath,
                    'url'=>url('/storage/'.$imagePath),
                    'wanted_id'=>$wanted->id,
                ]
            );
        }
        return dump($images);
    }
}
