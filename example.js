var dolar = require("./index");

var cotizacion = {};

function cambiarCotizacion(data){
  cotizacion = data;
}

dolar.fetch(cambiarCotizacion);
