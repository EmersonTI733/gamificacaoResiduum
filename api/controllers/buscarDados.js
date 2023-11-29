const tarefaModel = require('../../db/seeders/tarefaModels');

exports.BuscarDados_08 = async (req, res) => {
    // #swagger.tags = ['Dashboard']
      // #swagger.description = 'buscar dados de coleta do dia 08'
          const Dados = await tarefaModel.buscardados_08();
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

exports.BuscarDados_09 = async (req, res) => {
  // #swagger.tags = ['Dashboard']
      // #swagger.description = 'buscar dados de coleta do dia 09'
        const Dados = await tarefaModel.buscardados_09();
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

exports.BuscarDados_10 = async (req, res) => {
  // #swagger.tags = ['Dashboard']
      // #swagger.description = 'buscar dados de coleta do dia 10'
        const Dados = await tarefaModel.buscardados_10();
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