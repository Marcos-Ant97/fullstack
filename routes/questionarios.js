const questionarioRoutes = (app, fs) => {
    const dataPath = "./data/questionarios.json";
    const respPath = "./data/respostas.json";

    // READ ALL
    app.get("/questionarios", async (req, res) => {

        let getLocation = require('../api-calls/getLocation')
        let location = await getLocation();


        fs.readFile(dataPath, "utf8", (err, data) => {
            if (err) {
                throw err;
            }

            fs.readFile(respPath, "utf8", (err, resp) => {
                if (err) {
                    throw err;
                }

                res.render("home", {
                    questionarios: JSON.parse(data).questionarios,
                    respostas: JSON.parse(resp).respostas
                });

            })

        });
    });

    app.get("/questionarios/:id", (req, res) => {
        fs.readFile(dataPath, "utf8", (err, data) => {
            if (err) {
                throw err;
            }

            fs.readFile(respPath, "utf8", (err, resp) => {
                if (err) {
                    throw err;
                }

                res.render("single-questionario", {
                    questionarios: JSON.parse(data).questionarios[req.params.id - 1],
                    respostas: JSON.parse(resp).respostas[req.params.id - 1]
                });

            })

        });
    });

    app.get("/novo", (req, res) => {
        var titulo
        var usuario = "Carlos"

        const addPergunta = (array) => {
            return array = array.push({
                pergunta: ""
            })
        }

        var query_perguntas = [
            {
                pergunta: ""
            }
        ]

        res.render("create", {
            perguntasList: query_perguntas,
            titulo: titulo,
            user: usuario,
            add: addPergunta
        });
    });

    app.post("/novo", (req, res) => {
        var fs = require('fs')

        fs.readFile(dataPath, "utf8", (err, data) => {
            if (err) {
                throw err;
            }

            console.log(data)

            let novoQuestionarioId = Object.keys(JSON.parse(data).questionarios).length + 1;

            var date = new Date(Date.now())

            var dataToWrite = {
                id: novoQuestionarioId,
                titulo: req.body.titulo,
                usuario: "Marcos",
                created_at: date,
                perguntas: req.body.pergunta
            }

            parsedData = JSON.parse(data)
            parsedData.questionarios.push(dataToWrite)


             fs.writeFile(dataPath, JSON.stringify(parsedData), "utf8", () => {
                 alert("Questioanrio criado com sucesso!")
                 res.redirect('/questionarios')
             });

        });

    });

    // CREATE
    /*app.post("/questionarios", (req, res) => {

    });*/
};

module.exports = questionarioRoutes;