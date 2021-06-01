<?php

namespace App\models;

use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    protected $fillable = [
        'nome_fantasia', 'cnpj', 'endereco', 'email', 'nome_responsavel', 'cpf', 'celular', 'razao_social'
    ];
}