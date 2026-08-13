export type Database = {
  public: {
    Tables: {
      // Will be auto-generated from Supabase schema
      [key: string]: {
        Row: Record<string, unknown>;
        Insert: Record<string, unknown>;
        Update: Record<string, unknown>;
      };
    };
  };
};
