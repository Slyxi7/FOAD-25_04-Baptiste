const express = require("express");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
require("./Models/Associations");

const CoursRoute = require('./Routes/CoursRoute');
app.use('/cours', CoursRoute);

const EtudiantRoute = require('./Routes/EtudiantRoute');
app.use('/etudiant', EtudiantRoute);

const InscriptionRoute = require('./Routes/InscriptionRoute');
app.use('/inscription', InscriptionRoute);

const ProfilRoute = require('./Routes/ProfilRoute');
app.use('/profil', ProfilRoute);

const UtilisateurRoute = require('./Routes/UtilisateurRoute');
app.use('/utilisateur', UtilisateurRoute);


app.use((req, res) => {
  res.status(404).json({ message: "Route non trouvée" });
});

app.listen(port, () => {
  console.log(`Votre serveur est lancé sur http://127.0.0.1:${port}`);
});

//L'IP 172.21.173.79 est l'adresse locale de ta machine WSL, et donc accessible depuis ton navigateur Windows.
