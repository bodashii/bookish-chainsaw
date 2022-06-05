const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const exphbs = require('express-handlebars');
const hbs = exphbs.create();
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 5000;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(routes);

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

mongoose.set('debug', true);

app.listen(PORT, () =>
    console.log(`On live at http://localhost:${PORT}`)
);