import Link from "next/link";
export default function Page() {
  return (
      <div>
        <h1>Page d'accueil</h1>
        <p>Bienvenue sur notre site Web.</p>
        <Link href="/contacts">
          contactez-nous
        </Link>
      </div>
    );
  }

