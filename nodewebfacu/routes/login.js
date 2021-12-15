var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'northwind',
    multipleStatements:true
});

connection.connect();

/* READ GET login listing. */
router.get('/viewlogins', function(req, res, next) {
  connection.query('SELECT idlogin, login, nome, sobrenome FROM login', (results, error) => {
    if(error) res.send(error);
        else res.send(results)
  });
});


/* CREATE */
router.post('/login', function(req,res){
    //Declara e recebe variáveis
    var login = req.body.login.substring(0,45)
    var senha = req.body.senha.substring(0,8)
    var nome = req.body.nome.substring(0,45)
    var sobrenome = req.body.sobrenome.substring(0,45)

    connection.query('INSERT INTO login (login, senha, nome, sobrenome) values (?,?,?,?)', [login,senha,nome,sobrenome], 
    (results, error) => {
        if(error) res.send(error);
            else res.send(results)
      });

});

/**UPDATE */
router.patch('/login/:id', function(req,res){
    //Declara e recebe variáveis
    var idlogin = parseInt(req.params.id)
    var login = req.body.login.substring(0,45)
    var senha = req.body.senha.substring(0,8)
    var nome = req.body.nome.substring(0,45)
    var sobrenome = req.body.sobrenome.substring(0,45)

    connection.query('UPDATE login SET login=?, senha=?, nome=?, sobrenome=? WHERE id=?', [login,senha,nome,sobrenome,idlogin], 
    (results, error) => {
        if(error) res.send(error);
            else res.send(results)
      });

});


/**DELETE */
router.delete('/login/:id', function(req,res){
    //Declara e recebe variáveis
    var idlogin = parseInt(req.params.id)

    connection.query('DELETE FROM login WHERE id=?', [idlogin], 
    (results, error) => {
        if(error) res.send(error);
            else res.send(results)
      });

});

/**REALIZALOGIN */
router.post('/realizaLogin', function(req,res){
    //Declara e recebe variáveis
    var login = req.body.login;
    var senha = req.body.senha;

    connection.query('SELECT idlogin FROM login WHERE login=? AND senha=?', [login, senha], 
        (results, error) => {
        if(error) res.send(error);
            else res.send('Ok, usuário encontrado!')
      });
});

module.exports = router;

