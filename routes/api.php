<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



Route::group(
    ['namespace'=>'User',
     'prefix'=>'users'],
    function (){
        Route::post('/registration','StoreController');
});
Route::group(['namespace'=>'Admin'],function (){
    Route::group(['namespace'=>'Post'],function (){
        Route::get('/','PostController@index');
    });
});
Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::group(['middleware'=>'jwt.auth'],function (){
        //лише для авторизованих
        Route::post('me', 'AuthController@me');
        Route::post('refresh', 'AuthController@refresh');
        Route::group(['namespace' => 'Personal'], function () {
            Route::post('personal','IndexController');
        });
        Route::group(['namespace'=>'Admin','prefix'=>'/admin'], function () {
            Route::group(['namespace' => 'Category'], function () {
                Route::get('/category','CategoryController@index');
                Route::post('/category', 'CategoryController@store');
                Route::patch('/category/{category}', 'CategoryController@update');
                Route::delete('/category/{category}', 'CategoryController@destroy');
            });
            Route::group(['namespace' => 'Post', 'prefix' => 'posts'], function () {
                Route::post('/','PostController@store');
            });
        });
        Route::group(['namespace' => 'User', 'prefix' => 'user'], function () {
            Route::post('/userdata','DataController');
        });
    });

    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');




});
