'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function SignUpPage() {
  const [email, setEmail] = useState('test@example.com');
  const [password, setPassword] = useState('testtest');
  const [msg, setMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    setLoading(true); setMsg(null);
    const { error } = await supabase.auth.signUp({ email, password });
    setMsg(error ? error.message : 'Compte créé ! Vérifie éventuellement tes emails.');
    setLoading(false);
  };

  return (
    <main style={{ maxWidth: 360, margin: '64px auto', padding: 24, display: 'grid', gap: 12 }}>
      <h1>Créer un compte</h1>
      <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} style={{ padding: 12, borderRadius: 8, border: '1px solid #ddd' }}/>
      <input placeholder="Mot de passe" type="password" value={password} onChange={e=>setPassword(e.target.value)} style={{ padding: 12, borderRadius: 8, border: '1px solid #ddd' }}/>
      <button onClick={handleSignUp} disabled={loading} style={{ padding: 12, borderRadius: 8, background: '#6598fe', color: '#fff' }}>
        {loading ? 'Création…' : 'Créer mon compte'}
      </button>
      {msg && <p>{msg}</p>}
    </main>
  );
}
