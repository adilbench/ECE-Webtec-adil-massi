import React from 'react';

function App() {
  return (
    <html lang="fr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="acuile-1.css" />
        <link rel="icon" type="image/png" href="voiture-de-sport.png" />
        <title>Passionnés d'Automobiles</title>
      </head>
      <body>
        <header>
          <h1>AutoPass</h1>
        </header>
        <nav>
          <ul>
            <li><a href="acuille.html">Accueil</a></li>
            <li><a href="Article.html">Articles</a></li>
            <li><a href="/galerie">Galerie</a></li>
          </ul>
        </nav>
        <main>
          <h2>Bienvenue sur notre site pour les passionnés d'automobiles !</h2>
          <p>Découvrez les dernières actualités, articles et photos de voitures.</p>

          <section className="gallery">
            <h3>Galerie de Voitures</h3>
            <div className="image-container">
              <img src="Ferrari-Testarossa-1.png" alt="Ferrari Testarossa" />
              <img src="mclaren-f1.jpg" alt="mclaren f1" />
              <img src="mercedes-slr-mclaren-stirling-moss-4.jpg" alt="mercedes-slr-mclaren-stirling-moss" />
              <img src="first-aston-martin-db5-.jpg" alt="aston-martin-db5s" />
            </div>
          </section>
        </main>

        <footer>
          © 2023 AutoPass
        </footer>
      </body>
    </html>
  );
}

export default App;