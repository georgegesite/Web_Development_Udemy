//jshint esversion:8

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb+srv://admin-george:fSYARUuqozvsbryD@cluster0.qncuahv.mongodb.net/todolistdb', 
  {
    useNewUrlParser: true
  }); //connect to database
}
const itemsSchema = {
  name: String
};

const Item = mongoose.model("Item", itemsSchema);

const listSchema = {
  name: String,
  items: [itemsSchema]
};

const List = mongoose.model("List", listSchema);

app.get("/", async (req, res) => {
  try {
    const foundItems = await Item.find({});
    res.render("list", { listTitle: "Today", newListItems: foundItems });
    
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/:customListName", async (req, res) => {
  const customListName = _.capitalize(req.params.customListName);
  try {
    let foundList = await List.findOne({ name: customListName });
    if (!foundList) {
      foundList = new List({
        name: customListName,
        items: defaultItems
      });
      await foundList.save();
    }
    res.render("list", { listTitle: foundList.name, newListItems: foundList.items });
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/", async (req, res) => {
  const itemName = req.body.newItem;
  const listName = req.body.list;

  const item = new Item({
    name: itemName
  });

  try {
    if (listName === "Today") {
      await item.save();
      res.redirect("/");
    } else {
      const foundList = await List.findOne({ name: listName });
      foundList.items.push(item);
      await foundList.save();
      res.redirect("/" + listName);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/delete", async (req, res) => {
  const checkedItemId = req.body.checkbox;
  const listName = req.body.listName;

  try {
    if (listName === "Today") {
      await Item.findByIdAndRemove(checkedItemId);
      res.redirect("/");
    } else {
      await List.findOneAndUpdate(
        { name: listName },
        { $pull: { items: { _id: checkedItemId } } }
      );
      res.redirect("/" + listName);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
