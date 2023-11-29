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