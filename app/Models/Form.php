<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Form extends Model
{
    use HasFactory;
    protected $table ="forms";
    protected $fillable=["title","name","Strat_History","End_History","Filed_Forms"];
    protected $hidden=["updated_at","password"];
}
