<?php

namespace App\models;

use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class Usuario extends Model
{
    //campos tabela
    protected $fillable = [
        'nome', 'senha', 'email'
    ];
}