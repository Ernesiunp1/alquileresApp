import { Component, OnInit } from '@angular/core';
import { AnunciosVehiculo } from 'src/app/pages/interfaces/interface';
import { VehiculosService } from 'src/app/services/vehiculos.service';

import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable, tap } from 'rxjs';
import { error, log } from 'console';
import  firebase  from "firebase/compat/app";
import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage"
import 'firebase/compat/storage'

// import {Storage, ref, uploadBytes, listAll, getDownloadURL} from '@angular/fire/storage'

@Component({
  selector: 'app-listado-vehiculos',
  templateUrl: './listado-vehiculos.page.html',
  styleUrls: ['./listado-vehiculos.page.scss'],
})


export class ListadoVehiculosPage implements OnInit {

  vehiculos: AnunciosVehiculo[] = []
  imageUrl: string = ''
  usuarios: any[] = []
  path: string = 'imagenes/vehiculos'
  pathUsuarios: any[] = []
  pathPublicaciones: any[] = []

  constructor( private vehiculoService: VehiculosService,
              //  private storage: AngularFireStorage,
              //  private storage2 : Storage
               )  {
                // this.getImages2()

                
                // const ref = this.storage.ref('imagenes/vehiculos/ernes/ernespppp1684530745417/ppppp1684530745417 1684530745419');
                // ref.getDownloadURL().subscribe(url => {
                //   this.imageUrl = url;
                //   console.log("ESTA ES LA IMAGEN" , this.imageUrl);
                  
                // });

         
                
             

                }

  ngOnInit() {
    // this.getUsuarios()
    // this.getPublicaciones()
    
    this.vehiculoService.getVehiculos()
    .subscribe( resp => this.vehiculos.push(...resp) )
  }


  getUsuarios(){
   const storage = getStorage();
   let starsRef = ref(storage, 'imagenes/vehiculos');
  //  const starsRef = ref(storage, 'imagenes/vehiculos/ernes/ernesdcdcdcd1684524133740');

    listAll(starsRef)
      .then(async resp => {
        // OBTENIENDO TODOS LOS USUARIOS DEL PATH 
       for (let index = 0; index < resp.prefixes.length; index++) {
        const element = resp.prefixes[index].name;
        // console.log(element);
        this.usuarios.push(element)
        console.log(this.usuarios);
                  
       }

       await this.getPathUsuarios()

       await this.getPathPublicaciones()

       



       
      //  this.getImagenesUrl()


        // console.log(resp.prefixes[1].name)

        // for (const item of resp.items) {
        // const url = await getDownloadURL(item)
        // console.log(url);
        
        // }
      
      
      } )
    .catch((error) => {
      this.manejoErrores(error)
    });


  }

  getPathUsuarios(){
    const storage = getStorage();
    let starsRef = ref(storage, 'imagenes/vehiculos');

    for (const element of this.usuarios) {
      let path =  `${this.path}/${element}`
      this.pathUsuarios.push(path)
      console.log(this.pathUsuarios);
    }    
    
  };

  getPathPublicaciones(){
    const storage = getStorage();

    for (const path of this.pathUsuarios) {
      let starsRef = ref(storage, path)  
      
      listAll(starsRef)
      .then(
          async resp => {
            console.log(resp);

            for (let publicacion = 0; publicacion < resp.prefixes.length; publicacion++) {
              const element = resp.prefixes[publicacion];
              // console.log(element.name);
              
              this.pathPublicaciones.push(element.fullPath)
              
              console.log(this.pathPublicaciones);
            }
              
           
              
              
              
              
              // for ( let element of this.pathPublicaciones){
              //   const url= await getDownloadURL(element)
              //   console.log(url);
                
              // }
              
            // }

            // for (const item of resp.prefixes) {
            // const url = await getDownloadURL(item)
            // console.log(url)}
          }        

      )
      .catch(
        error => this.manejoErrores(error)
        )
    }
     
  }
   
      
 getImages(){
              let storage = getStorage()
              let starsRefs =  ref(storage, this.pathPublicaciones[0])
              
              listAll(starsRefs)
              .then(
                resp => console.log(resp)
                
              )
              .catch(
                error => console.log('error')
              )

  }
    









  manejoErrores(error: any){
     // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case 'storage/object-not-found':
          // File doesn't exist
          break;
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;
        case 'storage/canceled':
          // User canceled the upload
          break;

        // ...

        case 'storage/unknown':
          // Unknown error occurred, inspect the server response
          break;
      }
  }



  getImages2(){
    
    
    const storage = getStorage();
    let starsRef = ref(storage, 'imagenes/vehiculos/arnold');

    listAll(starsRef)
    .then(
      async resp => {
        console.log(resp)
        for( let element of resp.items){
            const url = await getDownloadURL(element)
            console.log(url);
            

        }
      }

      
    )
    .catch(
      // error => console.log(error)
      
    )

  }




}
