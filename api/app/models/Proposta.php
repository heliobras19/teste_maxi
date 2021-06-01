<?php

namespace App\models;

use Illuminate\Database\Eloquent\Model;

class Proposta extends Model
{
    protected $fillable = [
        'endereco_obra', 'valor_total', 'sinal', 'quantidade_parcelas', 'valor_parcelas', 'data_inicio_pagamento', 'pdf_path', 'status', 'idcliente'
    ];
}