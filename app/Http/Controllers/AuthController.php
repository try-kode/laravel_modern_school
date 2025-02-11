<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(){
        return view('admin.auth.login');
    }

    public function ajaxLogin(Request $request){

        $user = User::where("email", $request->email)->first();
        if($user != null){
            if(Hash::check($request->password, $user->password)){

                Auth::login($user);

                $resp_arr =[
                    "message" => "Login success!",
                    "data" => $user,
                    "success" => true
                ];
            }
            else{
                $resp_arr =[
                    "message" => "Login failed!",
                    "data" => null,
                    "success" => false
                ];
            }
        }
        return response()->json($resp_arr);
    }
}
