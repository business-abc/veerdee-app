export default function HomePage() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Bienvenue sur Veerdee</h1>
      <p>Interface premium (style Apple) — Auth Supabase, Chat connecté à n8n, Dashboard bientôt.</p>
      <ul>
        <li><a href="/sign-in">Se connecter</a></li>
        <li><a href="/sign-up">Créer un compte</a></li>
        <li><a href="/chat">Chat (test webhook n8n)</a></li>
        <li><a href="/dashboard">Dashboard (placeholder)</a></li>
      </ul>
    </main>
  );
}
