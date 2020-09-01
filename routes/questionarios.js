const questionarioRoutes = (app, fs) => {
    const dataPath = "./data/questionarios.json";

    // READ
    app.get("/questionarios", (req, res) => {
        fs.readFile(dataPath, "utf8", (err, data) => {
            if (err) {
                throw err;
            }

            res.render("home", {
                questionarios: JSON.parse(data).questionarios
            });
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