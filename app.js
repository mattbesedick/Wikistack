let express = require('express');
let morgan = require('morgan');
const PORT = 3000;
const models = require('./models');
const bodyParser = require('body-parser');

const app = express();

models.db.authenticate().then(() => {
	console.log('connected to the database');
});
async function init() {
	await models.db.sync({ force: true });
	// await models.User.sync();
	// await models.Page.sync();
	app.listen(PORT, () => {
		console.log(`App listening in port ${PORT}`);
	});
}

init();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/wiki', require('./routes/wiki'));
app.use('/user', require('./routes/user'));

app.get('/', (req, res) => {
	res.redirect('/wiki');
});
