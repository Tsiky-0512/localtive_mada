const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { initDatabase } = require('./database/databaseConnector');

// Route
const biensRoutes = require('./routes/biensRoute');
const locatairesRoutes = require('./routes/locataireRoute');
const usersRoutes = require('./routes/userRoute');

// initialiser la connexion sur le base de donnée
initDatabase();

// Pour accepter les connexions cross-domain (CORS)
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept , authorization ");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

// Pour les formulaires
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// les routes
const prefix = '/api';

app.get('/',(req,res) => {
    res.send('Working .... !');
})

app.use(`${prefix}/biens`,biensRoutes);
app.use(`${prefix}/locataires`,locatairesRoutes);
app.use(`${prefix}/auth`,usersRoutes);

let port = process.env.PORT || 8010;


// On démarre le serveur
app.listen(port, "0.0.0.0");
console.log('Serveur démarré sur http://localhost:' + port);
