<?php

namespace App\Http\Controllers;

use App\models\Proposta;
use App\Traits\apiResponser;
use Illuminate\Http\Request;

class propostaController extends Controller
{
    use apiResponser;

    public function mostrar()
    {
        return $this->success(Proposta::all());
    }
    public function cadastrar(Request $request)
    {
        Proposta::create($request->all());
        return $this->success(null);
    }

    public function cliente_propostas($idcliente)
    {
        $proposta = Proposta::where('idcliente', '=', $idcliente)->get();
        return $this->success($proposta);
    }

    public function editar(Request $request, $id)
    {
        $proposta = Proposta::findOrFail($id);
        $proposta->update($request->all());
        return $this->success(null);
    }
}