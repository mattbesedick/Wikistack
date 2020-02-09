let express = require("express");
let morgan = require("morgan");
const PORT = 3000;
const models = require('./models');


models.db.authenticate().then(() => {
  console.log("connected to the database");
});
async function init() {
     await models.db.sync({force:true});
    // await models.User.sync();
    // await models.Page.sync();
    app.listen(PORT, () => {
        console.log(`App listening in port ${PORT}`);
      });
}
init();
const app = express();
const layout = require("./views/layout");
app.use('/wiki', require('./routes/wiki'));
app.use('/user', require('./routes/user'));

app.get("/", (req, res) => {
  res.send(layout(""));
});



