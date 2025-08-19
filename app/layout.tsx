export const metadata = {
  title: 'Veerdee',
  description: 'Suivi musculation & nutrition',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body style={{ fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto' }}>
        <nav style={{ display: 'flex', gap: 12, padding: 16, borderBottom: '1px solid #eee' }}>
          <a href="/" style={{ fontWeight: 600 }}>Veerdee</a>
          <a href="/sign-in">Sign in</a>
          <a href="/sign-up">Sign up</a>
          <a href="/chat">Chat</a>
          <a href="/dashboard">Dashboard</a>
        </nav>
        {children}
      </body>
    </html>
  );
}
