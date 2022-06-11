const express = require('express');
const session = require('express-session');
const routes = require('./controllers');
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});

const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

const { Blog, User, Comment } = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 2 * 60 * 60 * 1000
  },
  resave: false,
  saveUninitialized: true,

};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use("/", routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});

