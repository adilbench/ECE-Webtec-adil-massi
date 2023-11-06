import React from 'react';

function ArticlePage() {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <title>Article</title>
        <link rel="icon" type="image/png" href="voiture-de-sport.png" />
        <link rel="stylesheet" type="text/css" href="article.css" />
      </head>
      <body>
        <header>
          <h1>AutoPass</h1>
          <nav>
            <ul>
              <li><a href="acuille.html">Accueil</a></li>
              <li><a href="Article.html">Articles</a></li>
              <li><a href="/galerie">Galerie</a></li>
            </ul>
          </nav>
        </header>
        <h2>Article</h2>

        <article>
          <h3>La Nouvelle Ferrari : Quand la Puissance Rencontre l'Élégance</h3>
          <img src="812xx.jpg" alt="Voiture" className="car-image" />
          <p>
            Depuis des décennies, Ferrari est synonyme de passion, de vitesse et de perfection automobile. La marque au cheval cabré, basée à Maranello, en Italie, a toujours été à la pointe de l'innovation dans le monde de l'automobile de luxe. En 2023, Ferrari ne fait pas exception à sa réputation légendaire avec le lancement de sa nouvelle création qui a les passionnés d'automobiles du monde entier en émoi.
          </p>
          <h4>La Ferrari 812 Superfast XX</h4>
          <p>
            La dernière œuvre d'art mécanique de la célèbre entreprise italienne s'appelle la Ferrari 812 Superfast XX. Le nom lui-même évoque la vitesse et la performance extrême, mais la beauté de cette voiture va bien au-delà de ses chiffres impressionnants.
          </p>
          <h4>Un Chef-d'Œuvre de Design</h4>

          <p>
            Dès le premier regard, la Ferrari 812 Superfast XX séduit par son design racé et élégant. Les lignes fluides de sa carrosserie en aluminium moulé sont à la fois aérodynamiques et artistiques. Les prises d'air agressives et la calandre avant confèrent à cette Ferrari une allure agressive, tandis que les courbes douces et les proportions bien équilibrées la rendent irrésistiblement séduisante.

            L'habitacle est un mélange harmonieux de luxe et de fonctionnalité. Les sièges en cuir artisanal offrent un confort exceptionnel, tandis que le tableau de bord est orné d'écrans tactiles haute technologie, offrant un contrôle intuitif des systèmes de la voiture.
          </p>
          <h4>Une Puissance Inégalée</h4>
          <p>
            Sous le capot de la Ferrari 812 Superfast XX, on trouve un moteur V12 6,5 litres délivrant une puissance phénoménale de 950 chevaux. Cette puissance est transmise aux roues arrière par l'intermédiaire d'une boîte de vitesses à double embrayage à sept rapports, garantissant une expérience de conduite à couper le souffle. Cette voiture est capable d'atteindre une vitesse de pointe de plus de 340 km/h et d'atteindre 100 km/h en seulement 2,9 secondes.

            Mais la Ferrari 812 Superfast XX est bien plus qu'une simple voiture rapide. Elle est équipée de systèmes de suspension évolués, de freins en carbone-céramique de pointe et d'une direction précise, ce qui lui confère une tenue de route exceptionnelle, même dans les conditions les plus exigeantes.
          </p>
          <h4>Technologie de Pointe</h4>
          <p>
            Ferrari n'a pas seulement mis l'accent sur la performance, mais également sur la technologie de pointe. La Superfast XX est équipée de capteurs et de caméras avancés, permettant une conduite semi-autonome dans certaines situations. De plus, le système d'infodivertissement embarqué offre une connectivité totale avec les smartphones et une multitude d'options de divertissement.
          </p>
          <h4>Conclusion</h4>
          <p>
            La nouvelle Ferrari 812 Superfast XX incarne la quintessence de l'automobile de sport italienne. Elle allie puissance, élégance, technologie et passion d'une manière qui rend hommage à l'héritage de la marque tout en repoussant les limites de l'innovation. Les amoureux de l'automobile du monde entier attendent avec impatience de pouvoir mettre la main sur cette œuvre d'art mécanique, qui incarne la fusion parfaite entre la performance et le style italien.

            Que vous soyez un passionné de voitures de sport ou un amateur de design automobile, la Ferrari 812 Superfast XX est une création incontournable qui laisse tout le monde sans voix. Ferrari a une fois de plus élevé la barre de l'excellence automobile, nous laissant rêver de ce que l'avenir nous réserve dans le monde de l'automobile de luxe.
          </p>
        </article>

        <footer>
          © 2023 AutoPass
        </footer>
      </body>
    </html>
  );
}

export default ArticlePage;
