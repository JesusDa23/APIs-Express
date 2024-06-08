const express = require ('express');
const cors = require('cors')

const {dbConection} = require( './config/mongo.config' ) // Importamos la configuracion de mongoose 
const PORT = process.env.PORT
const app = express();

// htpp://localhost:3000/api/products

app.use( express.json() );
app.use(cors())

app.use('/api/servicios', require('./routes/servicios.routers'))
app.use('/api/reservas', require('./routes/reservas.routes'))


dbConection(); // invoca la configuracion 

app.listen( PORT, function (){
    console.log(`Servidor corriendo en el puerto ${PORT}` );
})