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
Route::group(['namespace' => 'Wanted', 'prefix' => 'wanted'], function () {
    Route::get('/','WantedController@index');
    Route::get('/{wanted}','WantedController@show');
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
            Route::group(['namespace' => 'Volunteer', 'prefix' => 'volunteer'],function (){
                Route::get('/','VolunteerController@index');
                Route::patch('/{user}','VolunteerController@update');
            });
            Route::group(['namespace'=>'User','prefix'=>'users'],function (){
                Route::get('/','UsersController@index');
                Route::get('/roles','UsersController@getRoles');
                Route::post('/','UsersController@store');
                Route::patch('/{user}','UsersController@update');
                Route::delete('/{user}','UsersController@destroy');
            });
            Route::group(['namespace' => 'Wanted', 'prefix' => 'wanted'], function () {
                Route::get('/','WantedRequestController@index');
                Route::patch('/{wanted}','WantedRequestController@update');

            });
        });
        Route::group(['namespace' => 'Wanted', 'prefix' => 'wanted'], function () {
            Route::group(['namespace' => 'Comment', 'prefix' => '{wanted}/comments'], function () {
                Route::post('/','CommentController@store');
                Route::patch('/{comment}','CommentController@update');
                Route::delete('/{comment}','CommentController@destroy');
            });
            Route::get('/{wanted}','WantedController@show');
        });
        Route::group(['namespace' => 'Goal', 'prefix' => 'goals'], function () {
            Route::get('/','GoalController@getGoals');
        });
        Route::group(['namespace' => 'Donation', 'prefix' => 'donations'], function () {
            Route::post('/','DonationController@store');
            Route::get('/','DonationController@index');
        });
        Route::group(['namespace' => 'Wanted', 'prefix' => 'wanted'], function () {
            Route::post('/','WantedController@store');

        });
        Route::group(['namespace'=>'VolunteerRoleRequest','prefix'=>'volunteer-role-request'],function (){
            Route::post('/','VolunteerRoleController@store');
        });
        Route::group(['namespace' => 'User', 'prefix' => 'user'], function () {
            Route::post('/userdata','DataController');
        });
        Route::group(['namespace' => 'Marker', 'prefix' => '/markers'], function () {
            Route::post('/','MarkerController@store');
            Route::get('/','MarkerController@getMarkers');
        });
    });

    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');




});
