<?php

namespace App\Http\Controllers;

use App\models\Usuario;
use Illuminate\Http\Request;

class usuarioController extends Controller
{
    public function show()
    {
        $usuario = Usuario::all();
        return $usuario;
    }

    public function cad(Request $request)
    {
        Usuario::created($request->all());
    }
}