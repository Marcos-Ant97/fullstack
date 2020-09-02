const questionarioRoutes = (app, fs) => {
    const respostasPath = "./data/respostas.json";
    const questionarioPath = "./data/questionarios.json";

    // READ ALL
    app.get("/respostas", async (req, res) => {

        fs.readFile(respostasPath, "utf8", (err, data) => {
            if (err) {
                throw err;
            }

            res.render("home", {
                questionarios: JSON.parse(data).respostas
            });
        });
    });

    app.get("/resposta/:id", (req, res) => {
        fs.readFile(respostasPath, "utf8", (err, data) => {
            if (err) {
                throw err;
            }

            res.send(JSON.parse(data).respostas[req.params.id])

        });
    });

    app.get("/responder/:id", (req, res) => {
        fs.readFile(questionarioPath, "utf8", (err, data) => {
            if (err) {
                throw err;
            }

            questionario = JSON.parse(data).questionarios.find((element) => element.id == req.params.id)

            res.render("responder_questionario", {
                questionario: questionario,
                id: req.params.id
            });
        });
    });

    app.post("/responder/:id", (req, res) => {
        fs.readFile(respostasPath, "utf8", (err, data) => {
            if (err) {
                throw err;
            }

            var date = new Date(Date.now())

            var dataToWrite = {
                questionario_id: req.params.id,
                created_at: date,
                respostas: req.body.respostas
            }

            parsedData = JSON.parse(data)
            parsedData.respostas.push(dataToWrite)

            console.log(parsedData)


            fs.writeFile(respostasPath, JSON.stringify(parsedData), "utf8", () => {
                res.redirect('/questionarios')
            });

        });

    });

    // CREATE
    app.post("/resposta", (req, res) => {
        readFile((data) => {
            const novoQuestionarioId = Object.keys(data).length + 1;

            data[novoQuestionarioId] = JSON.parse(req.body.data);

            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send("Nova resposta adicionado");
            });
        }, true);
    });
};

module.exports = questionarioRoutes;