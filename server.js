var http = require('http');

http.createServer(function (req, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write('<!DOCTYPE html>');
    response.write('<head><title>Jogo dos Animais</title></head>');
    response.write('<body><script type="text/javascript">');
    
    response.write('class Classificacao {constructor(caracteristica, ladoSim, ladoNao){this.caracteristica = caracteristica;this.ladoSim = ladoSim;this.ladoNao = ladoNao;}');
    response.write('aprendeCom(jogador) {if (jogador.responda("O animal que vc pensou " + this.caracteristica + "?")) this.ladoSim = this.ladoSim.aprendeCom(jogador); else this.ladoNao = this.ladoNao.aprendeCom(jogador); return this;}}');
    response.write('class Animal {constructor(nome){ this.nome = nome;} aprendeCom(jogador) { if(jogador.responda("O animal que vc pensou eh o(a) " + this.nome + "?")) { jogador.considere("Acertei de novo!"); return this;} else { var novoNome = jogador.insira("Em qual animal pensastes?"); var caracteristica = jogador.insira("O(a) " + novoNome + " ______," + " mas o " + this.nome + " não."); var novoAnimal = new Animal(novoNome); return new Classificacao(caracteristica, novoAnimal, this);}}}');
    response.write('class Jogador {considere(mensagem){alert(mensagem);}responda(pergunta) {return confirm(pergunta);}insira(pergunta){var temp = new Jogador();var result = prompt(pergunta);if (result == null) return temp.insira(pergunta); return result;}}');
    response.write('class Main {main() {var jogador = new Jogador();var raiz = new Animal("Leao");while(true) {jogador.considere("Pense em um animal.");raiz = raiz.aprendeCom(jogador);console.log(raiz);}}}');
    response.write('var init = new Main(); init.main();');

    response.write('</script></body></html>');
    response.end();
}).listen(8080);
