const express = require('express');
const port = process.env.PORT || 3000;
const app = express();

const usuario = {
    nome: "Professor Isidro",
    email: "isidro@professorisidro.com.br",
    website: "www.professorisidro.com.br",
    instagram: "@professorisidro",
    canal: "Youtube.com/ProfessorIsidroVamosProgramar",
    hashtag: "#vamosprogramar"
}


app.get("/", (req, res) =>{
    res.send("It works!");
});

app.get("/usuario", (req, res) => {
    res.send(usuario);
});

app.listen(port, () =>{
    console.log("Server rodando aqui na porta... "+port);
});