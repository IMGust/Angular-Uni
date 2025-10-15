// src/app/models/carro.model.ts
//import { VolantePerso } from './volante-perso.model';
//import { TipoMotor } from './tipo-motor.model';

export interface Carro {
  id?: number;            // herdado de DefaultEntity
  nome: string;
  classificacao?: string;
  //volantePerso?: VolantePerso;  // associação OneToOne
  //tipoMotor?: TipoMotor;        // enum
}
