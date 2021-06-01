<?php

namespace App\Http\Controllers;

use App\models\Cliente;
use App\Traits\apiResponser;
use Dotenv\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class clienteController extends Controller
{

    use apiResponser;
    public function mostrar()
    {
        return $this->success(Cliente::all());
    }

    public function cadastrar(Request $request)
    {
        Cliente::create($request->all());
        return $this->success(null);
    }

    public function editar(Request $request, $id)
    {
        $cliente = Cliente::findOrFail($id);
        $cliente->update($request->all());
        return $this->success($request->all());
    }

    public function deletar($id)
    {
        $cliente = Cliente::findOrFail($id);
        $cliente->delete();
        return $this->success(null);
    }

    public function pesquisar($campo, $valor)
    {
        $campo = Str::lower($campo);
        $estado_campo = false;
        $valores_possiveis = ['nome_fantasia', 'cnpj', 'cpf', 'celular'];
        if ($campo == 'nome') {
            $campo = 'nome_fantasia';
        }
        if ($valor == null or $valor == '') {
            $this->mostrar();
            exit();
        }
        foreach ($valores_possiveis as $x) {
            if ($x == $campo) {
                $estado_campo = true;
            }
        }
        if ($estado_campo == true) {
            $cliente = Cliente::where($campo, 'like', '%' . $valor . '%')->get();
            return $this->success($cliente);
        } else {
            return $this->error('houve algum erro, contate o adm', 500);
        }
    }
}