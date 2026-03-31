import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

function createDummyClient(): SupabaseClient {
  const noopChain: any = new Proxy({}, {
    get() {
      return (..._args: any[]) => noopChain;
    },
  });
  // Make the chain thenable so await / .then() works
  noopChain.then = (resolve: any) => Promise.resolve({ data: null, error: null, count: 0 }).then(resolve);

  const authMethods: Record<string, any> = {
    getSession: () => Promise.resolve({ data: { session: null }, error: null }),
    getUser: () => Promise.resolve({ data: { user: null }, error: null }),
    onAuthStateChange: () => ({ data: { subscription: { unsubscribe() {} } } }),
    signInWithPassword: () => Promise.resolve({ data: { session: null, user: null }, error: null }),
    signUp: () => Promise.resolve({ data: { session: null, user: null }, error: null }),
    signOut: () => Promise.resolve({ error: null }),
    resetPasswordForEmail: () => Promise.resolve({ data: null, error: null }),
    updateUser: () => Promise.resolve({ data: { user: null }, error: null }),
  };

  return new Proxy({} as SupabaseClient, {
    get(_target, prop) {
      if (prop === "auth") {
        return new Proxy({} as any, {
          get(_t, method: string) {
            return authMethods[method] ?? ((..._args: any[]) => Promise.resolve({ data: null, error: null }));
          },
        });
      }
      if (prop === "from") {
        return () => noopChain;
      }
      return () => {};
    },
  }) as unknown as SupabaseClient;
}

export const supabase: SupabaseClient =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : createDummyClient();
