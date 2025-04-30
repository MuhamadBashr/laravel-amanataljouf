<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreDataUser extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
               'email' => ['email'],
               'phone'=>['numeric'],
               'idNumber'=>['numeric'],
               'stateOfUser'=>['boolean'],
               'TybeOfUser'=>['string'],
               'Job'=>['string'],
               'userName'=>['string'],
               'name'=>['string'],
               'EnterName'=>['string'],
               'typeOfEnterName'=>["string"],
               'model'=>["array"],
               "gendra"=>['boolean'],
               'escalation'=>['boolean'],
        ];
    }
}
