const questionarioRoutes = require("./questionarios.js");

const appRouter = (app, fs) => {
  app.get("/", (req, res) => {
    res.send("welcome to the development api-server");
  });
  questionarioRoutes(app, fs);
};

module.exports = appRouter;