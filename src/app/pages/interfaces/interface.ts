export interface Inmueble {
    usuarios:           Usuario[];
    anuncios_inmuebles: AnunciosInmueble[];
    anuncios_vehiculos: AnunciosVehiculo[];
}

export interface AnunciosInmueble {
    id?:              string;
    usuario?:         string;
    region?:          string;
    ciudad?:          string;
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
    id?:            string;
    usuario?:       string;
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
    id:           number;
    usuario:      string;
    email:        string;
    telefono:     number;
    subscripcion: boolean;
}

export interface Facil{
    facil: string[]
}