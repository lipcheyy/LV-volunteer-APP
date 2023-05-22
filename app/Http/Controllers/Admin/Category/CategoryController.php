<?php

namespace App\Http\Controllers\Admin\Category;

use App\Http\Controllers\Controller;
use App\Http\Requests\Category\StoreRequest;
use App\Http\Requests\Category\UpdateRequest;
use App\Http\Resources\Category\CategoryResource;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index(){
        $categories = Category::all();
        return CategoryResource::collection($categories);
    }
    public function store(StoreRequest $request){
        $data=$request->validated();
        Category::firstOrCreate([
            'title'=>$data['title']
        ]);
        return $data;
    }
    public function update(Category $category, UpdateRequest $request){
        $data=$request->validated();
        $category->update($data);
        return response()->json(['message' => 'category has been updated successfully']);
    }
    public function destroy(Category $category){
        $category->delete();
        return response()->json(['message' => 'category has been deleted successfully']);
    }
}
