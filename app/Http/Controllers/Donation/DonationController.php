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
    public function closeDonation(Donation $donation){
        $data=\request()->all();
        $donation->update(['is_active'=>$data['is_active']]);
        return response()->json(['message'=>'closed']);
    }
    public function index(){
        $donations = Donation::where('is_active', 1)
            ->orderBy('likes_count', 'desc')
            ->get();
        return DonationResource::collection($donations);
    }
    public function getDonation(Donation $donation){
        return new DonationResource($donation);
    }
}
