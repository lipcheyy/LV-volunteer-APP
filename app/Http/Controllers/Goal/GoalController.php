<?php

namespace App\Http\Controllers\Goal;

use App\Http\Controllers\Controller;
use App\Http\Resources\Donation\DonationResource;
use App\Models\Goal;
use Illuminate\Http\Request;

class GoalController extends Controller
{
    public function getGoals(){
        $goals=Goal::all();
        return $goals;
    }
    public function store(){
        $data=\request()->validate(
            ['title'=>'required|string']
        );
        Goal::firstOrCreate(
            ['title'=>$data['title']]
        );
        return response()->json(['message'=>'success']);
    }
    public function update(Goal $goal){
        $data=\request()->validate(['title'=>'string']);
        $goal->update($data);
        return response()->json(['message' => 'category has been updated successfully']);
    }
    public function destroy(Goal $goal){
        $goal->delete();
        return response()->json(['message' => 'category has been deleted successfully']);
    }
    public function getDonations(Goal $goal){
        $related=$goal->getDonations()
            ->where('is_active',1)
            ->get();
        return DonationResource::collection($related);
    }
}
