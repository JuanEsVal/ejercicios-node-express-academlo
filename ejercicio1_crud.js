const express = require('express');

const app = express();

//----------------  GET ------------------------------------

app.get('/me', (request, response) => {     
    console.log(request.method);
    response.status(200).json({
        "nombre": "Pepito",
        "edad": 25,
        "pais": "Australia"
      })
} )

//----------------  POST ------------------------------------

app.post('/metas', (request, response) => {     
    response.status(200).json([
        {
            hobbie: 'Leer'
        },
        {
            hobbie: 'Ver Documentales'
        },
        {
            hobbie: 'Aprender IT'
        }
    ])
} )
//----------------  PATCH ------------------------------------

app.patch('/metas', (request, response) => {     
    response.status(200).json([
        {
            prof_hobbie: 'Estudiar Ingles'
        },
        {
            prof_hobbie: 'Aprender IoT'
        }
    ])
} )
//----------------  PUT ------------------------------------

app.put('/business', (request, response) => {     
    response.status(200).json([
        {
            favorite_team: 'SAP'
        },
        {
            favorite_team: 'Cisco'
        },
        {
            favorite_team: 'IBM'
        },
        {
            verb: request.method
        }
    ])
} )

//----------------------------------------------------------


app.listen( 8000, () => { 
    console.log("Server started at port 8000") 
} )

//----------------  END ------------------------------------