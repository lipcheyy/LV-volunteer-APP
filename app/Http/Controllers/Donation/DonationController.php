<?php

namespace App\Http\Controllers\Donation;

use App\Http\Controllers\Controller;
use App\Http\Requests\Donation\StoreRequest;
use App\Http\Resources\Donation\DonationResource;
use App\Models\Donation;
use Illuminate\Http\Request;

class DonationController extends Controller
{
    public function store(StoreRequest $request){
        $data=$request->validated();
        $data['user_id']=auth()->user()->id;
        Donation::create($data);
    }
    public function index(){
        $donations = Donation::orderBy('likes_count', 'desc')->get();
        return DonationResource::collection($donations);
    }
    public function getDonation(Donation $donation){
        return new DonationResource($donation);
    }
}
