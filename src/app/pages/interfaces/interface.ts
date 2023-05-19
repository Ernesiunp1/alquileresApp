import { v4 as uuidv4 } from 'uuid';
export interface Inmueble {
    usuarios:           Usuario[];
    anuncios_inmuebles: AnunciosInmueble[];
    anuncios_vehiculos: AnunciosVehiculo[];
}

export interface AnunciosInmueble {
    id?:              string;
    usuario?:         string | null;
    region?:          string;
    ciudad?:          string;
    nombreAnuncio:    string;
    nombre_inmueble?: string;
    email?:           string;
    telefono?:        number;
    habitaciones?:    number;
    amoblado?:        boolean;
    banos?:           number;
    precio?:          number;
    tipo_inmuebles?:  string[]; // TipoInmueble[];
    facilidades?:     string[];
    descripcion?:     string;
    alt_img1?:         string;
    alt_img2?:         string;
    alt_img3?:         string;
    alt_img4?:         string;
    alt_img5?:         string;
    suscripcion:        any
    user?:              Usuario;
}

/*export enum TipoInmueble {
    Apartamentos = "Apartamentos",
    Cabañas = "Cabañas",
    Casa = "casa",
    Habitaciones = "Habitaciones",
    Hostel = "hostel",
    Loft = "Loft",
}*/

export interface AnunciosVehiculo {
    id?:            any;
    usuario?:       string | null;
    nombreAnuncio:  string;
    region?:        string;
    telefono?:      string;
    ciudad?:        string;
    tipo_vehiculo?: string;
    anio?:           number;
    marca?:         string;
    modelo?:        string;
    puestos?:       number;
    aire?:          boolean;
    descripcion?:   string;
    facilidades?:   string[];
    email?:         string;
    precio?:        number;
    subscripcion?:  boolean;
    alt_img1?:         string;
    alt_img2?:         string;
    alt_img3?:         string;
    alt_img4?:         string;
    alt_img5?:         string;


}

/*export enum TipoVehiculo {
    Bicicleta = "bicicleta",
    Camioneta = "camioneta",
    Carro = "carro",
    Moto = "moto",
    MotorHome = "motor home",
}*/

export interface Usuario {

    id:            string,
    nombre:        string,
    aliasUsuario?: string,
    apellido:      string ,
    email:         any,
    password:      string,
    telefono:      number,
    suscripcion:   boolean,
    isActive:      boolean,
    roles:         any,
    token:          any,
    

    // id?:           number;
    // usuario?:      string;
    // email?:        string;
    // telefono?:     number;
    // subscripcion?: boolean;


}

export interface Facil{
    facil: string[]
}

export interface Vehiculo{
      "usuario":string | null,
      "nombreAnuncio": string,
      "region":string,
      "ciudad":string,
      "tipo_vehiculo": string,
      "modelo":string,
      "marca":string,
      "anio": number,
      "puestos": number,
      "aire": boolean,
      "descripcion": string,
      "precio": number,
      "subscripcion":boolean
}

export interface Inmueble {

    "usuario":         string,
    "nombreAnuncio":   string,
    "region":          string,
    "ciudad":          string,
    "nombre_inmueble": string,
    "habitaciones":    number,
    "banos":           number,
    "amoblado":        boolean,
    "precio":          number,
    "tipo_inmuebles":  any,
    "facilidades":     any,
    "descripcion":     string,
    "suscripcion":     boolean

}