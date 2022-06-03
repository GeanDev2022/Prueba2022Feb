<?php
use App\Http\Controllers\API\gce_caracteristicasController;

Route::prefix('person')->group(function () {
    Route::get('/',[ gce_caracteristicasController::class, 'getAll']);
    Route::post('/',[ gce_caracteristicasController::class, 'create']);
    Route::delete('/{id}',[ gce_caracteristicasController::class, 'delete']);
    Route::get('/{id}',[ gce_caracteristicasController::class, 'get']);
    Route::put('/{id}',[ gce_caracteristicasController::class, 'update']);
});