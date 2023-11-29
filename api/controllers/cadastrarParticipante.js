const db = require('../../db/models/index');


exports.criarParticipante = async(req, res) => {
  // #swagger.tags = ['Participante']
    // #swagger.description = 'rota de criar usuario'

    /*
        #swagger.parameters['cadastrar_participante' = {
            in: 'body',
            description: 'cadastrar o participante no banco',
            required: true,
            schema: {$ref: "#/definitions/cadastrarParticipante"}
        }]
     */
    try {
      const dados = req.body;
      const tamanho = await db.participante.findAndCountAll();
      
      const criar = await db.participante.create({
        nomePar: dados.nome,
        nascimentoPar: dados.nascimento,
        celularPar: dados.celular,
        sexoPar: dados.sexo,
        emailPar: dados.email,
        escolaridadePar: dados.escolaridade,
        matriculaPar: tamanho.count+1001,
      })
      await db.endereco.create({
        matricula: criar.matriculaPar,
        estado: dados.estado,
        cidade: dados.cidade,
        bairro: dados.bairro,
        
      })
      
  
      res.status(201).json(
        data={
          mensagem:'Participante Cadastrado com Sucesso!',
          matricula:criar.matriculaPar
        }
      );
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };