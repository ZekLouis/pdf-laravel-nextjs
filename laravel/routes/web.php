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
    foreach (['flex', 'grid', 'table'] as $type) {
        exec("curl --request POST 'http://gotenberg:3000/forms/chromium/convert/url' --form 'url=\"http://nextjs:3000/print$type\"' --form 'landscape=\"true\"' -o /var/www/html/gotenberg-$type.pdf");
    }
    return view('welcome');
});
