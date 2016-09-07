# Dolar-hoy
Busca la cotización del dolar en un servicio de terceros
Utiliza como única dependencia node-fetch y permite establecer que url consultar.
Puede ser el modulo mas tonto de todo NPM si no es porque está lleno de helloword en console.log

## Instalar
```bash
npm install dolar-hoy --save
```

## Usar
```javascript
var dolar = require('dolar-hoy');
var cotizacion = {}

function cambiarCotizacion(data){
  cotizacion = data
  console.log(cotizacion)
}

dolar.fetch(callback)
```

## Respuesta
El api que viene por defecto otorga un JSON de la sigiente manera:
```json
{ libre: '15.25', blue: '15.30' }
```
