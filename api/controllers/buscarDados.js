const tarefaModel = require('../../db/tarefaModels');

exports.buscarDados = async (req, res) => {
    // #swagger.tags = ['Usuario']
      // #swagger.description = 'buscar cliente'
          const Dados = await tarefaModel.listarDados();
          try{
            return res.status(200).json(data={
              message:"Listagem realizada",
              Dados
          });
          }catch{
            return res.status(404).json(data={
              message:"error"
          });
          }
  
          
        
          };