//----------------Classificação

class Classificacao {

	var ladoNao, ladoSim, caracteristica;

	constructor(caracteristica, ladoSim, ladoNao){
		this.caracteristica = caracteristica;
		this.ladoSim = ladoSim;
		this.ladoNao = ladoNao;
	}

	aprendeCom(jogador) {
		if (jogador.responda("O animal que vc pensou " + caracteristica + "?"))
			ladoSim = ladoSim.aprendeCom(jogador);
		else
			ladoNao = ladoNao.aprendeCom(jogador);

		return this;
	}
}


//----------------Animal

class Animal {

	var nome;

	constructor(nome){
		this.nome = nome;
	}

	aprendeCom(jogador) {

		if(jogador.responda("O animal que vc pensou é o(a) " + nome + "?")) {
			jogador.considere("Acertei de novo!");
			return this;
		} else {
			var novoNome = jogador.insira("Em qual animal pensastes?");
			var caracteristica = jogador.insira("O(a) " + novoNome + " ______," + " mas o " + nome + " não.");
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
    document.getElementById("msg").innerHTML = pergunta;
    document.getElementById("yButton").onclick = function(){
        return true};
    document.getElementById("nButton").onclick = function(){
        return false};
	}

	insira(pergunta){
		var result = prompt(pergunta);
		if (result == null) insira(pergunta);
		return result;
	}
}


//----------------Main

class Mainy {

	main() {

		var jogador = new Jogador();
		var raiz = new Animal("Lion");

		while(true) {
			jogador.considere("Pense em um animal.");
			raiz = raiz.aprendeCom(jogador);
		}
	}
}
