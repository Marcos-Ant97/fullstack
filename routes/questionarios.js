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
                    questionarios: JSON.parse(data).questionarios[req.params.id],
                    respostas: JSON.parse(resp).respostas[req.params.id]
                });

            })

        });
    });

    // CREATE
    app.post("/questionarios", (req, res) => {
        readFile((data) => {
            const novoQuestionarioId = Object.keys(data).length + 1;

            data[novoQuestionarioId] = JSON.parse(req.body.data);

            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send("Novo questionario adicionado");
            });
        }, true);
    });
};

module.exports = questionarioRoutes;