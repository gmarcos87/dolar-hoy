var dolar = require('./index');

var cotizacion = {};

function cambiarCotizacion(data){
  cotizacion = data
  console.log(cotizacion)
}

dolar.fetch(cambiarCotizacion)
