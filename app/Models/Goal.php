<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Goal extends Model
{
    use HasFactory;
    protected $guarded=false;
    public function getDonations(){
        return $this->hasMany(Donation::class);
    }
}
