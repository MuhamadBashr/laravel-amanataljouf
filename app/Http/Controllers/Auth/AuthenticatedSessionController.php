<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\RateLimiter;
use App\Models\User;
use PharIo\Manifest\Email;
class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request)
    {
        $request->authenticate();
        $request->session()->regenerate();
        $user = User::firstOrCreate(['email' => $request->email]);
        if($user->hasRole('DepartmentManagerUser')) {
            return redirect()->intended("/DepartmentManagerUser");
            // response()->json(['success' => 'تم تسجيل الدخوك قسم'], 201);
        }
         if($user->hasRole('admin')) {
            return redirect()->intended("/admin");
            // response()->json(['success' => 'تم تسجيل الدخوك قسم'], 201);
        }
         if($user->hasRole('EntreUser')) {
            return redirect()->intended("/entreUser");
            // response()->json(['success' => 'تم تسجيل الدخوك قسم'], 201);
        }
    //   return redirect()->intended(RouteServiceProvider::HOME);
    // return redirect()->intended(RouteServiceProvider::HOME);
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
