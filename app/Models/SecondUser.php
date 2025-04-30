<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Permission\Traits\HasRoles; 
class SecondUser extends Model
{
    use HasFactory,HasRoles;
    protected $guarded = [];
    protected $guard_name = 'web'; 
    protected $table = 'users';
    protected $fillable=["name","email","phone","userName","idNumber"];
    protected $hidden=["email_verified_at","remember_token","created_at","updated_at","password"];
        public function posts(){
        return $this->hasMany(Post::class);
    }
}
