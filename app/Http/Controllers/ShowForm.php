<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
class ShowForm extends Controller
{
      public function index()
    {
        return Inertia::render('ShowForms/index');

    }
}
