var http = require('http');

http.createServer(function (req, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write('<!DOCTYPE html>');
    response.write('<head><title>Jogo dos Animais</title></head>');
    response.write('<body><script type="text/javascript">');

    //Database
    /*
    response.write('class Database {this.mysql = require('mysql');createConnection(){var con = mysql.createConnection({host: "us-cdbr-iron-east-03.cleardb.net", user: "b4dddc63a004aa", password: "973cb855", database: "heroku_f2c0b70d30891bb"});} createTable(){con.connect(function(err){if(err)throw err; console.log("Connected!"); var sql = "CREATE TABLE treeData (column LONGTEXT)";con.query(sql, function (err, result){if (err) throw err; console.log("Table created");});});}');
    response.write('insertData(strOBJ){con.connect(function(err) {if (err) throw err;console.log("Connected!");var sql = "INSERT INTO treeData (column) VALUES (strOBJ)";con.query(sql, function (err, result) {if (err) throw err;console.log("1 record inserted");});});} loadData(){con.connect(function(err) {if (err) throw err;con.query("SELECT column FROM treeData", function (err, result, fields) {if (err) throw err; return result[0].column; }); }); }');
    */
    //code
    response.write('class Classificacao {constructor(caracteristica, ladoSim, ladoNao){this.caracteristica = caracteristica;this.ladoSim = ladoSim;this.ladoNao = ladoNao;}');
    response.write('aprendeCom(jogador) {if (jogador.responda("O animal que vc pensou " + this.caracteristica + "?")) this.ladoSim = this.ladoSim.aprendeCom(jogador); else this.ladoNao = this.ladoNao.aprendeCom(jogador); return this;}}');
    response.write('class Animal {constructor(nome){ this.nome = nome;} aprendeCom(jogador) { if(jogador.responda("O animal que vc pensou eh o(a) " + this.nome + "?")) { jogador.considere("Acertei de novo!"); return this;} else { var novoNome = jogador.insira("Em qual animal pensastes?"); var caracteristica = jogador.insira("O(a) " + novoNome + " ______," + " mas o " + this.nome + " nao."); var novoAnimal = new Animal(novoNome); return new Classificacao(caracteristica, novoAnimal, this);}}}');
    response.write('class Jogador {considere(mensagem){alert(mensagem);}responda(pergunta) {return confirm(pergunta);}insira(pergunta){var temp = new Jogador();var result = prompt(pergunta);if (result == null) return temp.insira(pergunta); return result;}}');
    response.write('class Main {main() {var jogador = new Jogador();var raiz = new Animal("Leao"); /* var strOBJ = JSON.stringify(raiz); var initDB = Database(); initDB.createConnection(); initDB.createTable(); initDB.insertData(strOBJ); console.log(initDB.loadData()); */ while(true) {jogador.considere("Pense em um animal.");raiz = raiz.aprendeCom(jogador);}}}');
    response.write('var init = new Main(); init.main();');

    response.write('</script></body></html>');
    response.end();
}).listen(process.env.PORT || 8000);
