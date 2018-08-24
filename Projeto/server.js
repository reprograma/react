var uuidv4 = require('uuid/v4');
var express = require("express");
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
app.use(cors());
app.use(bodyParser.json());

var usuario = {
    token: 'e9f84b67-2794-4a15-a8d4-9cc59ebfd87i',
    nome: 'Camila Belo',
    foto: 'https://2.gravatar.com/avatar/b2fec54edb8ff237c464525025ef3b44?s=400&d=mm'
}

app.post('/login', function(req, res) {
    const email = req.body.email
    const senha = req.body.senha

    if (email !== 'camilaibs@gmail.com' || senha !== '123123') {
        res.status(400);
        res.json({ erro: "Email ou senha inválida" });
        return;
    }

    res.status(200);
    res.json({ usuario: usuario });
})


var postits = [];

app.get("/postits", function(req, res) {
    var token = req.get('Authorization');

    if (token !== usuario.token) {
        res.status(401);
        res.json({ erro: 'Este token é inválido, acesso negado' });
    }

    res.status(200);
    res.json({ postits: postits });
    return;
});

app.get("/postits/:id", function(req, res) {
    var token = req.get('Authorization');

    if (token !== usuario.token) {
        res.status(401);
        res.json({ erro: 'Este token é inválido, acesso negado' });
    }

    var id = req.params.id;
    
    var postit;
    for (var i = 0; i < postits.length; i++) {
        if (postits[i].id === id) {
            postit = postits[i]
            break;
        }
    }

    if (postit === undefined) {
        res.status(400);
        res.json({ erro: "Postit não encontrado com este id" });
        return;
    }

    res.status(200);
    res.json({ postit: postits[id] });
    return
});

app.post("/postits", function(req, res) {
    var token = req.get('Authorization');

    if (token !== usuario.token) {
        res.status(401);
        res.json({ erro: 'Este token é inválido, acesso negado' });
    }

    var id = uuidv4();
    
    postits.push({
      id: id,
      titulo: req.body.titulo,
      texto: req.body.texto
    });

    res.status(201);
    res.json({ id: id });
    return;
});

app.put("/postits/:id", function(req, res) {
    var token = req.get('Authorization');

    if (token !== usuario.token) {
        res.status(401);
        res.json({ erro: 'Este token é inválido, acesso negado' });
    }

    var id = req.params.id;

    var postit;
    for (var i = 0; i < postits.length; i++) {
        if (postits[i].id === id) {
            postit = postits[i]
            break;
        }
    }

    if (postit === undefined) {
        res.status(400);
        res.json({ erro: "Postit não encontrado com este id" });
        return;
    }

    postit.titulo = req.body.titulo;
    postit.texto = req.body.texto;

    res.status(200);
    res.send("ok");
});

app.delete("/postits/:id", function(req, res) {
    var token = req.get('Authorization');

    if (token !== usuario.token) {
        res.status(401);
        res.json({ erro: 'Este token é inválido, acesso negado' });
    }

    var id = req.params.id;

    var postit;
    for (var i = 0; i < postits.length; i++) {
        if (postits[i].id === id) {
            postit = postits[i]
            break;
        }
    }

    if (postit === undefined) {
        res.status(400);
        res.json({ erro: "Postit não encontrado com este id" });
        return;
    }
    
    postits.splice(postits.indexOf(postit), 1);

    res.status(200);
    res.send("ok");
});

var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("Aplicação rodando na porta: ", port);
});