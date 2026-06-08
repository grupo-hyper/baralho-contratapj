-- Tabela de leads do Baralho Digital — CONARH 2026
CREATE TABLE IF NOT EXISTS public.leads (
  id          UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  name        TEXT        NOT NULL,
  email       TEXT        NOT NULL,
  phone       TEXT,
  company     TEXT        NOT NULL,
  score       INTEGER     NOT NULL CHECK (score >= 0),
  answers     JSONB,
  event       TEXT        NOT NULL DEFAULT 'CONARH 2026'
);

-- índices para buscas comuns
CREATE INDEX IF NOT EXISTS leads_email_idx   ON public.leads (email);
CREATE INDEX IF NOT EXISTS leads_event_idx   ON public.leads (event);
CREATE INDEX IF NOT EXISTS leads_created_idx ON public.leads (created_at DESC);

-- Row Level Security: apenas service_role pode ler/escrever
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "service_role_all" ON public.leads
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);
