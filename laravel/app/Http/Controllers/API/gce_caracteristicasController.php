<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
Use App\Models\gce_caracteristicas;
Use Log;

class gce_caracteristicasController extends Controller
{
    //
    public function getAll(){
        $data = gce_caracteristicas::get();
        return response()->json($data, 200);
      }

      public function create(Request $request){
        $data['gce_nombre_equipo'] = $request['gce_nombre_equipo'];
        $data['gce_board'] = $request['gce_board'];
        $data['gce_case'] = $request['gce_case'];
        $data['gce_procesador'] = $request['gce_procesador'];
        $data['gce_grafica'] = $request['gce_grafica'];
        $data['gce_ram'] = $request['gce_ram'];
        $data['gce_disco_duro'] = $request['gce_disco_duro'];
        $data['gce_teclado'] = $request['gce_teclado'];
        $data['gce_mouse'] = $request['gce_mouse'];
        $data['gce_pantalla'] = $request['gce_pantalla'];
        $data['gce_estado'] = $request['gce_estado'];
        gce_caracteristicas::create($data);
        return response()->json([
            'message' => "Creado con éxito",
            'success' => true
        ], 200);
      }
  
      public function delete($id){
        $res = gce_caracteristicas::find($id)->delete();
        return response()->json([
            'message' => "Eliminado con exito",
            'success' => true
        ], 200);
      }
  
      public function get($id){
        $data = gce_caracteristicas::find($id);
        return response()->json($data, 200);
      }
  
      public function update(Request $request,$id){
        $data['gce_nombre_equipo'] = $request['gce_nombre_equipo'];
        $data['gce_board'] = $request['gce_board'];
        $data['gce_case'] = $request['gce_case'];
        $data['gce_procesador'] = $request['gce_procesador'];
        $data['gce_grafica'] = $request['gce_grafica'];
        $data['gce_ram'] = $request['gce_ram'];
        $data['gce_disco_duro'] = $request['gce_disco_duro'];
        $data['gce_teclado'] = $request['gce_teclado'];
        $data['gce_mouse'] = $request['gce_mouse'];
        $data['gce_pantalla'] = $request['gce_pantalla'];
        $data['gce_estado'] = $request['gce_estado'];
        gce_caracteristicas::find($id)->update($data);
        return response()->json([
            'message' => "Actualizado con exito",
            'success' => true
        ], 200);
      }





}
