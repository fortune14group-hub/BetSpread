import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: window.location.origin },
    });

    setLoading(false);
    setMessage(
      error ? error.message : "Magic link skickad! Kolla din e-post."
    );
  }

  return (
    <div className="mx-auto max-w-md p-6">
      <h1 className="mb-4 text-2xl font-semibold">Logga in</h1>

      <form onSubmit={handleLogin} className="space-y-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="din@mail.se"
          className="w-full rounded border px-3 py-2"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded bg-black py-2 text-white disabled:opacity-60"
        >
          {loading ? "Skickar…" : "Skicka magic link"}
        </button>
      </form>

      {message && <p className="mt-4 text-sm">{message}</p>}
    </div>
  );
}
