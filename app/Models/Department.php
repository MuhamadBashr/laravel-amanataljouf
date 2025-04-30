<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    use HasFactory;
    protected $guarded = [];
    protected $guard_name = 'web'; 
    protected $table = 'Department';
    protected $fillable=["idagent","flowingWho","user_id","from_id"];
    protected $hidden=["updated_at","password"];
    // public static Department(){
    //     return $this->hasMany(,);
    // }
}
