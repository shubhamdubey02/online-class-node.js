const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const errorController = require('./controllers/error')
//const expressHbs = require('express-handlebars');

const app = express();

//app.engine('hbs', expressHbs({ layoutsDir: 'views/layouts', defaultLayout: 'main-layout' }));
app.set('view engine', 'hbs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(2001, () => console.log("Server running on port 2001"));