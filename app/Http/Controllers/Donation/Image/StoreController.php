<?php

namespace App\Http\Controllers\Donation\Image;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class StoreController extends Controller
{
    public function __invoke()
    {
        $data=\request()->all();
        return dump($data);
    }
}
