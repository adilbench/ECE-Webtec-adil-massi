import React from 'react';
// Importez d'autres modules nécessaires
export async function getStaticProps() {
    // Récupérez vos données d'articles ici. Remplacez la ligne suivante par votre propre logique de récupération de données.
    const articles = await fetchData(); // Mettez en œuvre votre logique de récupération de données
  
    return {
      props: {
        articles,
      },
    };
  }
  export default function ArticlesSSG({ articles }) {
    return (
      <div>
        <h1>Articles</h1>
        <ul>
          {articles.map((article) => (
            <li key={article.id}>
              <a href={`/articles/${article.id}`}>{article.title}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
 
    