//------------Classificação

class Classificacao {

 constructor(caracteristica, ladoSim, ladoNao){
   this.caracteristica = caracteristica;
   this.ladoSim = ladoSim;
   this.ladoNao = ladoNao;
}

 aprendeCom(jogador) {
   if (jogador.responda("O animal que vc pensou " + this.caracteristica + "?"))
     this.ladoSim = this.ladoSim.aprendeCom(jogador);
   else
     this.ladoNao = this.ladoNao.aprendeCom(jogador);

   return this;
 }
}


//----------------Animal

class Animal {

 constructor(nome){
   this.nome = nome;
 }

 aprendeCom(jogador) {

   if(jogador.responda("O animal que vc pensou eh o(a) " + this.nome + "?")) {
     jogador.considere("Acertei de novo!");
     return this;
   } else {
     var novoNome = jogador.insira("Em qual animal pensastes?");
     var caracteristica = jogador.insira("O(a) " + novoNome + " ______," + " mas o " + this.nome + " não.");
     var novoAnimal = new Animal(novoNome);
     return new Classificacao(caracteristica, novoAnimal, this);
   }
 }
}


//----------------Jogador

class Jogador {

 considere(mensagem){
   alert(mensagem);
 }

 responda(pergunta) {
   return confirm(pergunta);
 }

 insira(pergunta){
   var temp = new Jogador();
   var result = prompt(pergunta);
   if (result == null) return temp.insira(pergunta);
   return result;
 }
}


//----------------Main

class Main {

 main() {

   var jogador = new Jogador();
   var raiz = new Animal("Leao");

   while(true) {
     jogador.considere("Pense em um animal.");
     raiz = raiz.aprendeCom(jogador);
     console.log(raiz);
   }
 }
}
