<?php

namespace App\Http\Controllers;

use App\models\Propostascliente;
use App\Traits\apiResponser;
use Illuminate\Http\Request;

class propostaclienteController extends Controller
{
    use apiResponser;
    public function mostrar()
    {
        return $this->success(Propostascliente::all());
    }
}