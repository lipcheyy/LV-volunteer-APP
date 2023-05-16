<?php

namespace App\Http\Controllers\Wanted\Comment;

use App\Http\Controllers\Controller;
use App\Http\Requests\Wanted\Comment\StoreRequest;
use App\Models\Comment;
use App\Models\Wanted;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function store(StoreRequest $request, Wanted $wanted){
        $data=$request->validated();
        $data['user_id']=auth()->user()->id;
        Comment::create($data);
        return response()->json(['message'=>'success']);
    }
}
