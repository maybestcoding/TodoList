
import express from "express";
import bodyParser from "body-parser";
import date from "./date.cjs";

const app = express();
const todos = [];
const workItems =[];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
  const day = date.getDate();
  res.render("index", {listTitle: "Daily List", newItem: todos, date:day});
});

app.get("/work", (req, res) => {
  const day = date.getDate();
 res.render("index", {listTitle: "Work List", newItem: workItems, date:day});
})

app.post ("/", function(req, res) {
  let item = req.body.todoList;
  if(req.body.list === "Work"){
    workItems.push(item);
    res.redirect("/work")
  } else {  
  todos.push(item);
  res.redirect("/");
  }
});

app.listen(3000, function() {
  console.log("Server started on port 3000.");
});
