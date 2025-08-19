import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,          // ex: https://pscrazkqswleewzoddtk.supabase.co
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!      // anon key du même projet
);
