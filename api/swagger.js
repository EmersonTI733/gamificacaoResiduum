const swaggerAutogen = require('swagger-autogen')

const endpointsFile = ['./routers.js']
const outpuFile = './swagger_output.json'

const doc = {
    info: {
        version:"3.0.3",
        title:"API residuum, sistema de gestao",
        description:"Documentacao automatica gerada pelo swagger autogen"
    },
    host:"localhost:8080",
    basePath:"/",
    schemes:['http','https'],
    consumes:['application/json', 'application/x-www-form-urlencoded'],
    produces:['application/json', 'application/x-www-form-urlencoded'],
    tags:{
      name:"loginUsuario",
      description:"Endpoints"
    },
    securityDefinitions:{
      bearerAuth:{
        type:"apikey",
        in:"header",
        name:"Authorization",
        scheme:"bearer",
        bearerFormat:"JWT",
      }
    },
    security:{
      "bearerAuth":["delete_usuario"],
    },
    definitions: {
      cadastrarParticipante:{
              $nome:"emerson",
              $nascimento:"12/12/12",
              $celular:"92993464549",
              $sexo:"masculino",
              $email:"emerson@gmail.com",
              $endereco:"sao jose, 45",
              $escolaridade:"ensino medio",
      },
    },
    
    
}

swaggerAutogen(outpuFile, endpointsFile, doc).then(()=>{
   require("../app")
})