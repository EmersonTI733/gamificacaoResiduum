const db = require('../../db/models/index');
const tarefaModel = require('../../db/seeders/tarefaModels');

exports.adicionarResiduo = async(req, res)=>{
   // #swagger.tags = ['participante']
    // #swagger.description = 'inserir residuo'

    /*
        #swagger.parameters['inserir_residuo' = {
            in: 'body',
            description: 'editar um usuario no banco',
            required: true,
            schema: {$ref: "#/definitions/cadastraResiduo"}
        }]
     */
  const dados = req.body;
  const validar = await tarefaModel.verificaDados(dados.matricula);
  
  if(validar){
    const gravarResiduo = await db.residuo.create({
      matricula: dados.matricula,
      estado: validar.estado,
      cidade: validar.cidade,
      bairro: validar.bairro,
      papel: dados.papel,
      metal: dados.metal,
      vidro: dados.vidro,
      organico: dados.organico,
      plastico: dados.plastico
    })
      if (gravarResiduo){
        return res.status(200).json(
          data={
          message:'dados salvo com sucesso',
          code: 200
      })
      }else{
        return res.status(201).json(
          data={
          message:'nada pra salvar',
          code: 201
      })
      }
  }else{
    return res.status(404).json(
      data={
      message:'matricula invalida',
      code: 404
  })
  }
  
}