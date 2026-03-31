import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

// Only create the client when both env vars are present; otherwise provide a
// dummy so the landing page still renders without a backend.
export const supabase: SupabaseClient =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : (new Proxy({} as SupabaseClient, {
        get(_target, prop) {
          // auth.onAuthStateChange must return a subscription-like object
          if (prop === "auth") {
            return new Proxy({} as any, {
              get() {
                return (..._args: any[]) => ({ data: { subscription: { unsubscribe() {} } }, error: null });
              },
            });
          }
          // .from(...) chains
          if (prop === "from") {
            const chain: any = {
              select: () => chain,
              insert: () => chain,
              update: () => chain,
              delete: () => chain,
              eq: () => chain,
              neq: () => chain,
              order: () => chain,
              limit: () => chain,
              single: () => chain,
              maybeSingle: () => chain,
              then: (resolve: any) => resolve({ data: null, error: null, count: 0 }),
            };
            return () => chain;
          }
          return () => {};
        },
      }) as unknown as SupabaseClient);
