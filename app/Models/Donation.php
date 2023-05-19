<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Donation extends Model
{
    use HasFactory;
    protected $guarded=false;
    public function user(){
        return $this->belongsTo(User::class);
    }
    public function likes(){
        return $this->belongsToMany(User::class,'donation_user_likes','donation_id','user_id');
    }
    public function goal(){
        return $this->belongsTo(Goal::class);
    }
    protected $withCount=['likes'];
}
