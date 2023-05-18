<?php

namespace App\Http\Controllers\Donation\Like;

use App\Http\Controllers\Controller;
use App\Models\Donation;
use Illuminate\Http\Request;

class LikeController extends Controller
{
    public function store(Donation $donation){
        auth()->user()->likes()->toggle($donation->id);
        return response()->json(['message'=>'likesd']);
    }
}
