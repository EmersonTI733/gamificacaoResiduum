const db = require("./models/index");
const { Op } = require("sequelize");


exports.buscadados_08 = async()=>{
    const inicio = '2023-12-07';
    const fim = '2023-12-07';
    const totalPapel = await db.residuo.sum('papel', {
        where: {
          createdAt: { 
            [Op.between]: [new Date(inicio), new Date(fim)]
          }
        }
      });
    
      const total= totalPapel+totalMetal+totalVidro+totalOrganico+totalPlastico;
    
        data={
          total_do_Dia_08:total,
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