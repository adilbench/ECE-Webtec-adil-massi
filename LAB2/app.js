const fs = require('fs');
const path = require('path');
const http = require('http');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url);

  if (pathname === '/about') {
    // Définissez le chemin complet du fichier JSON
    const jsonFilePath = path.join(__dirname, 'content', 'about.json');

    // Vérifiez si le fichier JSON existe
    if (fs.existsSync(jsonFilePath)) {
      // Lisez le contenu du fichier JSON
      const jsonContent = fs.readFileSync(jsonFilePath, 'utf8');

      // Définissez l'en-tête Content-Type approprié pour afficher JSON
      res.writeHead(200, { 'Content-Type': 'application/json' });

      // Envoyez le contenu JSON en réponse
      res.end(jsonContent);
    } else {
      // Redirigez vers la page d'erreur 404 si le fichier n'existe pas
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Fichier introuvable');
    }
  } else {
    // Gestion des autres routes ici (comme précédemment)
    // ...
  }
});

const port = 8080;

server.listen(port, () => {
  console.log(`Le serveur fonctionne sur le port ${port}`);
});
