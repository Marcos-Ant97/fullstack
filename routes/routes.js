const questionarioRoutes = require("./questionarios.js");
const respostasRoutes = require("./respostas.js")

const appRouter = (app, fs) => {
  app.get("/", (req, res) => {
    res.redirect("/questionarios");
  });
  app.get("/novo", (req, res) => {
    res.render("create");
  });
  questionarioRoutes(app, fs);
  respostasRoutes(app,fs)
};

module.exports = appRouter;