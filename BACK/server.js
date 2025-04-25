const express = require("express");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
require("./Models/Associations");

const UtilisateurRoute = require('./Routes/UtilisateurRoutes');
app.use('/utilisateur', UtilisateurRoute);

const EtudiantRoute = require('./Routes/EtudiantRoutes');
app.use('/etudiant', EtudiantRoute);

const ProfilRoute = require('./Routes/ProfilRoutes');
app.use('/profil', ProfilRoute);

const CoursRoute = require('./Routes/CoursRoutes');
app.use('/cours', CoursRoute);


app.use((req, res) => {
  res.status(404).json({ message: "Route non trouvée" });
});

app.listen(port, () => {
  console.log(`Votre serveur est lancé sur http://127.0.0.1:${port}`);
});

//L'IP 172.21.173.79 est l'adresse locale de ta machine WSL, et donc accessible depuis ton navigateur Windows.
