

const list = [
  {todo: "Wash the car", stillToDo: true}, {todo: "Buy milk", stillToDo: true}
];

const data = [{todos: list}];
const completed = [{completed: }];

const express = require("express");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const mustacheExpress = require("mustache-express");``
const app = express();

app.use(express.static("./"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());
app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", "./views");


app.get("/", function (req, res) {
  res.render('index', { todos: data });
});

app.post("/", function (req, res) {
  list.push({todo:req.body.todo, stillToDo: true});
  res.redirect('/');
});

app.post("/complete", function (req, res) {
  completed.push({todo: req.body.todo, stillToDo: false});
  res.redirect('/');
});

app.listen(3000, function(){
  console.log("Successfully started express application.")
});
