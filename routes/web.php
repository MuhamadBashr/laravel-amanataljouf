<?php

use App\Http\Controllers\CreateReport;
use App\Http\Controllers\DataModels;
use App\Http\Controllers\FlowingModel;
use App\Http\Controllers\FollowtheForms;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Whoops\Run;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ReviewDataModels;
use App\Http\Controllers\UsersAdd;
use PhpParser\Lexer\TokenEmulator\ReverseEmulator;
use App\Http\Controllers\AdminAcceptUser;
use App\Http\Controllers\AdminAcceptModels;
use App\Http\Controllers\AdminCreateSecondUser;
use App\Http\Controllers\SecondUserFlowingModelController;
use App\Http\Controllers\SecondUserShowFlowingModelController;
use App\Http\Controllers\SecondUserShowModalController;
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
    return Inertia::render('Auth/Login'); 
});
Route::get('/dashboard', function () {
    return Inertia::render('EntreUser');
})->middleware(['auth', 'verified'])->name('dashboard');
Route::get('/DepartmentManagerUser', function () {
    return Inertia::render('DepartmentManagerUser');
})->middleware(['auth', 'verified','role:DepartmentManagerUser']);
Route::get('/admin', function () {
    return Inertia::render('admin');
})->middleware(['auth', 'verified','role:admin']);
Route::get('/entreUser', function () {
    return Inertia::render('EntreUser');
})->middleware(['auth', 'verified','role:EntreUser']);

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::prefix('DepartmentManagerUser')->middleware(['auth','role:DepartmentManagerUser'])->group(function () {
    Route::resource('/posts',PostController::class);
    Route::resource('/flowingmodel',FollowtheForms::class);
    Route::resource('/dataModels',DataModels::class);
    Route::resource('/ReviewDataModels',ReviewDataModels::class);
    Route::resource('/CreateReport',CreateReport::class);
    Route::resource('/UsersAdd',UsersAdd::class);
    // Route::post('/UsersAdd',[UsersAdd::class,'store']);
    });
    Route::prefix('admin')->middleware(['auth','role:admin'])->group(function () {
          Route::resource('AdminAcceptUser',AdminAcceptUser::class);
          Route::resource('AdminAcceptModels',AdminAcceptModels::class);
          Route::resource('AdminCreateSecondUser',AdminCreateSecondUser::class);
    });
    Route::prefix('entreUser')->middleware(['auth','role:EntreUser'])->group(function () {
    // Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    // Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    // Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    // Route::resource('/posts',PostController::class);
    // Route::resource('/flowingmodel',FollowtheForms::class);
    // Route::resource('/dataModels',DataModels::class);
    // Route::resource('/ReviewDataModels',ReviewDataModels::class);
    // Route::resource('/CreateReport',CreateReport::class);
    // Route::resource('/UsersAdd',UsersAdd::class);
    // Route::post('/UsersAdd',[UsersAdd::class,'store']);
      Route::resource('SecondUserFlowingModel',SecondUserFlowingModelController::class);
      Route::resource('SecondUserShowFlowingModel',SecondUserShowFlowingModelController::class);
      Route::resource('SecondUserShowModal',SecondUserShowModalController::class);
    });

require __DIR__.'/auth.php';
