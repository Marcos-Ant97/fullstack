const questionarioRoutes = require("./questionarios.js");
const respostasRoutes = require("./respostas.js")

const appRouter = (app, fs) => {
  app.get("/", (req, res) => {
    res.send("welcome to the development api-server");
  });
  app.get("/novo", (req, res) => {
    res.render("create");
  });
  questionarioRoutes(app, fs);
  respostasRoutes(app,fs)
};

module.exports = appRouter;