<?php

namespace App\Http\Controllers\Admin\Wanted;

use App\Http\Controllers\Controller;
use App\Models\Wanted;
use Illuminate\Http\Request;

class WantedRequestController extends Controller
{
    public function index(){
        $wanteds=Wanted::where('approved',false);
        return $wanteds;
    }
}
