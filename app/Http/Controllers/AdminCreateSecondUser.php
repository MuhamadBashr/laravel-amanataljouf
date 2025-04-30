<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Requests\StoreDataSecondUser; 
use App\Models\AddUser;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
class AdminCreateSecondUser extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return Inertia::render('AdminCreateSacandUser/index');
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
    public function store(StoreDataSecondUser $request)
    {
        //
         $adduser=AddUser::create([
             "name"=>$request->FirstName."/t".$request->SecondName,
            "email"=>$request->Email,
            "model"=>json_encode($request->model),
            "phone"=>$request->Phone,
            "userName"=>$request->userName,
            "idNumber"=>$request->ID_CARD,
            "userName"=>$request->FirstName,
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
        if (!$user->hasRole('admin')) {
            $user->assignRole('DepartmentManagerUser');
        }
        return response()->json(['success' => 'تم إنشاء المستخدم وربطه وإعطاؤه دور بنجاح'], 201);
    } else {
        return response()->json(['error' => 'فشل إنشاء المستخدم'], 500);
    }
//         dd($request->all());
//           "FirstName" => "MOHAMMED"
//   "SecondName" => "ABOU"
//   "Phone" => "0502566462"
//   "Email" => "a7007001@gmail.com"
//   "ID_CARD" => "211087"
//   "Agencies" => "13b86e89"
//   "Departments" => "090f8763"
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
