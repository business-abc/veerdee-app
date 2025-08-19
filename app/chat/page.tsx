'use client';
import { useState } from 'react';

export default function ChatPage() {
  const [text, setText] = useState('hello');
  const [resp, setResp] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const send = async () => {
    try {
      setLoading(true); setResp(null);
      const r = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ping: text }),
      });
      const data = await r.json();
      setResp(data);
    } catch (e: any) {
      setResp({ error: e?.message ?? 'Erreur inconnue' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ padding: 24, display: 'grid', gap: 12, maxWidth: 560, margin: '0 auto' }}>
      <h1>Chat — Test webhook n8n</h1>
      <input value={text} onChange={(e)=>setText(e.target.value)} placeholder="Tape un message (ex: hello)" style={{ padding: 12, borderRadius: 8, border: '1px solid #ddd' }}/>
      <button onClick={send} disabled={loading} style={{ padding: 12, borderRadius: 8, background: '#6598fe', color: '#fff' }}>
        {loading ? 'Envoi…' : 'Envoyer'}
      </button>
      <pre style={{ background: '#f6f6f6', padding: 12, borderRadius: 8, whiteSpace: 'pre-wrap' }}>
        {resp ? JSON.stringify(resp, null, 2) : 'Réponse affichée ici'}
      </pre>
    </main>
  );
}
