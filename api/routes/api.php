<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use app\User;


//Rotas clientes
Route::get('/cliente/mostrar', 'clienteController@mostrar');
Route::get('/cliente/pesquisar/{campo}/{valor}', 'clienteController@pesquisar');

Route::get('/cliente/pesquisar/{campo}', 'clienteController@mostrar');


Route::post('/cliente/cadastrar', 'clienteController@cadastrar');
Route::post('/cliente/editar/{id}', 'clienteController@editar');
Route::delete('cliente/deletar/{id}', 'clienteController@deletar');

//Rotas proposta
Route::get('proposta/cliente/{id}', 'propostaController@cliente_propostas');
Route::post('proposta/cadastrar', 'propostaController@cadastrar');
Route::get('proposta/mostrar', 'propostaclienteController@mostrar');
Route::post('/proposta/editar/{id}', 'propostaController@editar');
Route::delete('proposta/deletar/{id}', 'propostaController@deletar');

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/me', function (Request $request) {
        return auth()->user();
    });

    Route::post('/auth/logout', 'loginController@logout');
});

Route::post('/auth/register', 'loginController@register');
Route::post('/auth/logar',  'loginController@login');