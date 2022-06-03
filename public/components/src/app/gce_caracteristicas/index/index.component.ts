import { Component, OnInit } from '@angular/core';

import { GceCaracteristicasService } from '../gce_caracteristicas.service';
import { GceCaracteristicas } from '../gce_caracteristicas';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  gces: GceCaracteristicas[] =[];

 // constructor() { }
 constructor(public gcesService: GceCaracteristicasService) { }

 ngOnInit(): void {
   this.gcesService.getAll().subscribe((data: GceCaracteristicas[])=>{
     this.gces = data;
     console.log(this.gces);
   })
 }

 deleteGce(gce_id:number){
   this.gcesService.delete(gce_id).subscribe(res => {
        this.gces = this.gces.filter(item => item.gce_id !== gce_id);
        console.log('Persona eliminada con exito!');
   })
 }

}
