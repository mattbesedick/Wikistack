let Sequelize = require("sequelize");
let db = new Sequelize("postgres://postgres:1487@localhost:5432/wikistack");

const Page = db.define("page", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'home'
  },
  slug: {
    type: Sequelize.STRING, 
    allowNull:false,
    defaultValue: '/'
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false, 
    defaultValue: ''
  },
  status: {
    type: Sequelize.ENUM("open", "closed"), 
    defaultValue: 'open'
  }
});

const User = db.define("user", {
  name: {
    type: Sequelize.STRING,
    allowNull:false,
    defaultValue: 'John Smith'
  },
  email: {
    type: Sequelize.STRING,
    allowNull:false, 
    defaultValue: 'email@email.com',
    validate: {
        isEmail: true
      }
  }
});

module.exports = { db , Page , User};
// module.exports = { db };
