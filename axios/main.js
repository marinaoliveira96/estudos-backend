import axios from 'axios';

class Api{
  static async getAdress(cep){
   const response = new Address((await axios.get(`https://viacep.com.br/ws/${cep}/json/`)).data);
   
   return response;
  }
}

class Address {
  constructor({uf, logradouro, bairro, localidade}){
    this.uf = uf;
    this.logradouro = logradouro;
    this.bairro = bairro;
    this.localidade = localidade;
  }
}

Api.getAdress('01001000').then(v => {console.log(v)});