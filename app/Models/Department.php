<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
class Department extends Model
{
    use HasFactory;
    protected $table = 'department';
    protected $fillable=["idagent","flowingWho","user_id","from_id"];
    protected $hidden=["updated_at","password"];
    public function User(){
        return $this->hasMany(User::class,"user_id");
    }
}
