const questionarioRoutes = (app, fs) => {
    const respostasPath = "./data/respostas.json";
    const questionarioPath = "./data/respostas.json";

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

            // res.render("home", {
            //     questionarios: JSON.parse(data).questionarios[req.params.id]
            // });
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