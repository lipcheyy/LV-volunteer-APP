<?php

namespace App\Http\Controllers\Wanted;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class WantedController extends Controller
{
    public function store(){
        $data=\request()->all();
        return dump($data);
    }
}
