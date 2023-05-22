<?php

namespace App\Http\Controllers\Region;

use App\Http\Controllers\Controller;
use App\Http\Resources\Wanted\WantedResource;
use App\Models\Region;
use Illuminate\Http\Request;

class RegionController extends Controller
{
    public function index(){
        $regions=Region::all();
        return $regions;
    }
    public function getWantedByRegion(Region $region){
        $wanteds=$region->wanteds;
        return WantedResource::collection($wanteds);
    }
}
