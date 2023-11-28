const db = require("./models/index");
const { Op } = require("sequelize");

exports.listarDados = async() => {
  const totalPapel = await db.residuo.sum('papel', {
    where: {
      createdAt: { 
        [Op.between]: [new Date('2023-11-27'), new Date('2023-11-29')]
      }
    }
  });
  const totalMetal = await db.residuo.sum('metal');
  const totalVidro = await db.residuo.sum('vidro');
  const totalOrganico = await db.residuo.sum('organico');
  const totalPlastico = await db.residuo.sum('plastico');

  const total= totalPapel+totalMetal+totalVidro+totalOrganico+totalPlastico;

    data={
      totalGeral:total,
      total_papel_kg:totalPapel,
      total_metal_kg:totalMetal,
      total_vidro_kg:totalVidro,
      total_organico_kg:totalOrganico,
      total_plastico_kg:totalPlastico
    }

  try{
    return data;
  }catch{
    return false;
  }
 
}

exports.verificaDados = async(matricula)=>{
  const user = await db.residuo.findOne({
    attributes:['matricula'],
    where:{
        matricula: matricula,
    }
  });
  
  if(user){
    return true;
  }else{
    return false;
  }
  
  
}



exports.UpDate = async(dados)=>{
    const update = await db.residuo.findOne({
      where:{
          matricula: dados.matricula
      }
    });
    
    if(dados.papel){
      update.papel = update.papel + dados.papel;
    }
    if(dados.metal){
      update.metal = update.metal + dados.metal;
    }
    if(dados.vidro){
      update.vidro = update.vidro + dados.vidro;
    }
    if(dados.organico){
      update.organico = update.organico + dados.organico;
    }
    if(dados.plastico){
      update.plastico = update.plastico + dados.plastico;
    }
    const Salvo = await update.save();
    try{
      return true;
    }catch{
      return false;
    }

  }