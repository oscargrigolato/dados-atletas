class Atleta {
   constructor(nome, idade, peso, altura, notas) {
this.nome = nome;
this.idade = idade;
this.peso = peso;
this.altura = altura;
this.notas = notas;
   }

calculaCategoria() {
  let categoria     
       switch (true) {
   case this.idade >= 9 && this.idade <= 11:
   categoria = "Infantil";
    break;

   case this.idade >= 12 && this.idade <= 13:
   categoria = "Juvenil";
    break;    

   case this.idade >= 14 && this.idade <= 15:
   categoria = "Intermediário";
    break;  

    case this.idade >= 16 && this.idade <= 30:
   categoria = "Adulto";
    break;   

    default:
   categoria = "Sem categoria";
   break;
                 
}
return categoria}

calculaIMC() {  
   let imc = this.peso / (this.altura * this.altura) 
   return imc             
}    
                                 
calculaMediaValida() {     
              let notasEj = this.notas
             let notasAtleta = notasEj.sort(function(a, b) {
            return a - b;
        }).slice(1, notasEj.length-1)     
            let soma = notasAtleta.reduce(function(total,atual){     
                return total + atual
            })

            let media = soma/notasAtleta.length  
                 return media
} 
obtemNomeAtleta() {    
  return this.nome;

}
obtemIdadeAtleta() { 
  return this.idade;
                
}
obtemPesoAtleta() {                
return this.peso;
} 
obtemAlturaAtleta() {                
return this.altura;
} 


obtemNotasAtleta() {               
return this.notas;
}

obtemCategoria() { 
 return this.calculaCategoria();
}  
obtemIMC() {                      
return this.calculaIMC();
}
obtemMediaValida() {  
 return this.calculaMediaValida();        
}   
}


const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

 
    
    

    console.log("Nome:" + atleta.obtemNomeAtleta())
    console.log("Idade:" + atleta.obtemIdadeAtleta())
    console.log("Peso:" + atleta.obtemPesoAtleta())
    console.log("Altura:" + atleta.obtemAlturaAtleta())
    console.log("Notas:" + atleta.obtemNotasAtleta())
    console.log("Categoria:" + atleta.obtemCategoria())
    console.log("IMC:" + atleta.obtemIMC())
    console.log("Média válida:" + atleta.obtemMediaValida())