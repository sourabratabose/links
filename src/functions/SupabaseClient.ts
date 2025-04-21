import { createClient } from "@supabase/supabase-js";

const client = createClient(
  "https://rsqppxvvwvlxmpdshrwi.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzcXBweHZ2d3ZseG1wZHNocndpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUxMzUyMjgsImV4cCI6MjA2MDcxMTIyOH0.llhXbbIUsqJDL6LDHVml6bj1VJjSfpG6pSCap4EVW3k"
);

export default client;
