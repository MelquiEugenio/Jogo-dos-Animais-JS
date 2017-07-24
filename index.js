var http = require('http');

http.createServer(function (req, response) {

    //HTML
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write('<!DOCTYPE html>');
    response.write('<head><title>Jogo dos Animais</title></head>');
    response.write('<body><script type="text/javascript">');

    /* Database
    response.write('var mysql = require('mysql'); var con = mysql.createConnection({ host: "us-cdbr-iron-east-03.cleardb.net", user: "b4dddc63a004aa", password: "cae101720173ef1", database: "heroku_f2c0b70d30891bb"});');
    response.write('function insertData(strOBJ) {con.connect(function(err) {if (err) throw err; console.log("Connected!"); var sql = "INSERT INTO treedata (hereisthebobj) VALUES (" + strOBJ + ")"; con.query(sql, function (err, result) { if (err) throw err; console.log("1 record inserted");});});}');
    */

    //NodeJS Script
    response.write('class Classificacao {constructor(caracteristica, ladoSim, ladoNao){this.caracteristica = caracteristica;this.ladoSim = ladoSim;this.ladoNao = ladoNao;}');
    response.write('aprendeCom(jogador) {if (jogador.responda("O animal que vc pensou " + this.caracteristica + "?")) this.ladoSim = this.ladoSim.aprendeCom(jogador); else this.ladoNao = this.ladoNao.aprendeCom(jogador); return this;}}');
    response.write('class Animal {constructor(nome){ this.nome = nome;} aprendeCom(jogador) { if(jogador.responda("O animal que vc pensou eh o(a) " + this.nome + "?")) { jogador.considere("Acertei de novo!"); return this;} else { var novoNome = jogador.insira("Em qual animal pensastes?"); var caracteristica = jogador.insira("O(a) " + novoNome + " ______," + " mas o " + this.nome + " nao."); var novoAnimal = new Animal(novoNome); return new Classificacao(caracteristica, novoAnimal, this);}}}');
    response.write('class Jogador {considere(mensagem){alert(mensagem);}responda(pergunta) {return confirm(pergunta);}insira(pergunta){var temp = new Jogador();var result = prompt(pergunta);if (result == null) return temp.insira(pergunta); return result;}}');
    response.write('class Main {main() {var jogador = new Jogador();var raiz = new Animal("Leao"); /* var strOBJ = JSON.stringify(raiz); console.log(strOBJ); */ while(true) {jogador.considere("Pense em um animal.");raiz = raiz.aprendeCom(jogador);}                                                                                                                                                                                                                                                                                                                                                                                                                                                                     }}');
    response.write('var init = new Main(); init.main();');

    //HTML
    response.write('</script></body></html>');
    response.end();
}).listen(process.env.PORT || 8080);


/* Código Identado (NodeJS)

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
   }
 }
}
*/
