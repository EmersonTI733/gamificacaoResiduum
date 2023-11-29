const db = require("../models/index");
const { Op } = require("sequelize");

exports.buscardados_08= async() => {
  const inicio = '2023-12-07';
    const fim = '2023-12-07';
    const totalPapel = await db.residuo.sum('papel', {
        where: {
          createdAt: { 
            [Op.between]: [new Date(inicio), new Date(fim)]
          }
        }
      });
      const totalMetal = await db.residuo.sum('metal', {
        where: {
          createdAt: { 
            [Op.between]: [new Date(inicio), new Date(fim)]
          }
        }
      });
      const totalVidro = await db.residuo.sum('vidro', {
        where: {
          createdAt: { 
            [Op.between]: [new Date(inicio), new Date(fim)]
          }
        }
      });
      const totalOrganico= await db.residuo.sum('organico', {
        where: {
          createdAt: { 
            [Op.between]: [new Date(inicio), new Date(fim)]
          }
        }
      });
      const totalPlastico = await db.residuo.sum('plastico', {
        where: {
          createdAt: { 
            [Op.between]: [new Date(inicio), new Date(fim)]
          }
        }
      });

  const total= totalPapel+totalMetal+totalVidro+totalOrganico+totalPlastico;

    data={
      total_dia_08:total,
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

exports.buscardados_09= async() => {
  const inicio = '2023-12-07';
    const fim = '2023-12-07';
    const totalPapel = await db.residuo.sum('papel', {
        where: {
          createdAt: { 
            [Op.between]: [new Date(inicio), new Date(fim)]
          }
        }
      });
      const totalMetal = await db.residuo.sum('metal', {
        where: {
          createdAt: { 
            [Op.between]: [new Date(inicio), new Date(fim)]
          }
        }
      });
      const totalVidro = await db.residuo.sum('vidro', {
        where: {
          createdAt: { 
            [Op.between]: [new Date(inicio), new Date(fim)]
          }
        }
      });
      const totalOrganico= await db.residuo.sum('organico', {
        where: {
          createdAt: { 
            [Op.between]: [new Date(inicio), new Date(fim)]
          }
        }
      });
      const totalPlastico = await db.residuo.sum('plastico', {
        where: {
          createdAt: { 
            [Op.between]: [new Date(inicio), new Date(fim)]
          }
        }
      });

  const total= totalPapel+totalMetal+totalVidro+totalOrganico+totalPlastico;

    data={
      total_dia_09:total,
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

exports.buscardados_10= async() => {
  const inicio = '2023-12-07';
    const fim = '2023-12-07';
    const totalPapel = await db.residuo.sum('papel', {
        where: {
          createdAt: { 
            [Op.between]: [new Date(inicio), new Date(fim)]
          }
        }
      });
      const totalMetal = await db.residuo.sum('metal', {
        where: {
          createdAt: { 
            [Op.between]: [new Date(inicio), new Date(fim)]
          }
        }
      });
      const totalVidro = await db.residuo.sum('vidro', {
        where: {
          createdAt: { 
            [Op.between]: [new Date(inicio), new Date(fim)]
          }
        }
      });
      const totalOrganico= await db.residuo.sum('organico', {
        where: {
          createdAt: { 
            [Op.between]: [new Date(inicio), new Date(fim)]
          }
        }
      });
      const totalPlastico = await db.residuo.sum('plastico', {
        where: {
          createdAt: { 
            [Op.between]: [new Date(inicio), new Date(fim)]
          }
        }
      });

  const total= totalPapel+totalMetal+totalVidro+totalOrganico+totalPlastico;

    data={
      total_dia_10:total,
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
  const user = await db.endereco.findOne({
    attributes:['matricula','estado','cidade','bairro'],
    where:{
        matricula: matricula,
    }
  });
  
  if(user){
    return user;
  }else{
    return false;
  }
  
  
}



