<?php

namespace App\Http\Controllers\Donation\Image;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class StoreController extends Controller
{
    public function __invoke()
    {
        $data=\request()->all();
        $image=$data['image'];
        $imageName=md5(Carbon::now() . '_'. $image->getClientOriginalName())
            .'.'.$image->getClientOriginalExtension();
        $imagePath=Storage::disk('public')->putFileAs('/images/content',$image,$imageName);
        return response()->json(['url'=>url('/storage/'.$imagePath)]);
    }
}
