export class Cliente {
  _id: String;
  idCliente: String;
  nome: string;
  dataNascimento: string;
  sexo: string;
  
  constructor(_id ?: String, idCliente ?: String, nome ?: string, 
    dataNascimento ?: string, sexo ?: string){
      this._id = _id;
      this.idCliente = idCliente;
      this.nome = nome;
      this.dataNascimento = dataNascimento;
      this.sexo = sexo;
    }

    
  }