<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    exec("curl --request POST 'http://gotenberg:3000/forms/chromium/convert/url' --form 'url=\"http://nextjs:3000/louis\"' -o /var/www/html/test.pdf");
    return view('welcome');
});
