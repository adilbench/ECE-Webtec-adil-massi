// pages/articles/[id].js

import { useRouter } from 'next/router';
export async function getStaticPaths() {
  // Votre logique pour générer les chemins
}

export default function Article({ article }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
}

export async function getStaticPaths() {
  // Generate dynamic paths based on actual data (e.g., from an API)
  const paths = articlesData.map((article) => ({
    params: { id: article.id },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const article = articlesData.find((a) => a.id === id);

  return {
    props: {
      article,
    },
  };
}

const articlesData = [
  { id: '1', title: 'Article 1', content: 'Content of Article 1.' },
  { id: '2', title: 'Article 2', content: 'Content of Article 2.' },
  { id: '3', title: 'Article 3', content: 'Content of Article 3.' },
];
