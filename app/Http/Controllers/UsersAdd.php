<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\AddUser;
use App\Models\User;
use App\Http\Requests\StoreDataUser;
use Illuminate\Support\Facades\Hash;
class UsersAdd extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return Inertia::render('UsersAdd/index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreDataUser $request)
    {
        // dd("ddd");
        // dd($request->all());
        $adduser=AddUser::create([
            "name"=>$request->name,
            "email"=>$request->email,
            // 'password'=> Hash::make("Aa@6243240"),
            "model"=>json_encode($request->model),
            "escalation"=>$request->escalation,
            "gender"=>$request->gendra,
            "phone"=>$request->phone,
            "userName"=>$request->userName,
            "idNumber"=>$request->idNumber,
            "TybeOfUser"=>$request->TybeOfUser,
            "StateOfUser"=>$request->StateOfUser,
        ]);
        if ($adduser) {
        // إنشاء مستخدم في users إذا لم يكن موجودًا
        $user = User::firstOrCreate(
            ['email' => $adduser->email], // البحث عن المستخدم بالبريد الإلكتروني
            [
                "name" => $adduser->name,
                "password" => Hash::make("Aa@6243240"),
            ]
        );
        // التأكد من أن المستخدم لديه دور
        if (!$user->hasRole('DepartmentManagerUser')) {
            $user->assignRole('EntreUser');
        }
        return response()->json(['success' => 'تم إنشاء المستخدم وربطه وإعطاؤه دور بنجاح'], 201);
    } else {
        return response()->json(['error' => 'فشل إنشاء المستخدم'], 500);
    }

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
