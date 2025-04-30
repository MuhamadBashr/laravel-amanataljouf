<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Permission\Traits\HasRoles;
class AddUser extends Model
{
    use HasFactory,HasRoles;
    protected $guarded = [];
    protected $guard_name = 'web'; 
    protected $table = 'users';
    protected $fillable=["name","email","model","escalation","gender","Job","phone","userName","idNumber","TybeOfUser","StateOfUser"];
    protected $hidden=["email_verified_at","remember_token","created_at","updated_at","password"];
}
