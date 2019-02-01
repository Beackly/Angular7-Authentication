import { Injectable } from '@angular/core';
declare let altertify: any; 


@Injectable({
  providedIn: 'root'
})
export class AltertifyService {

constructor() { }

success(message: string){
 altertify.success(message);

}

warning(message: string){
  altertify.warning(message);
  
  }

  error(message: string){
    altertify.error(message);
    
    }

}
