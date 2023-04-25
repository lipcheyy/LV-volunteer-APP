<?php

namespace App\Http\Controllers\Admin\Post;

use App\Http\Controllers\Controller;
use App\Http\Requests\Post\StoreRequest;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function store(StoreRequest $request){
        $data=$request->validated();
        return $data;
    }
}
