import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  try {
    const body = await req.json();
    const { name, email, phone, company, score, answers, event } = body;

    if (!name || !email) {
      return new Response(JSON.stringify({ error: 'Campos obrigatórios: name, email' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
    );

    // usa a estrutura existente da tabela leads
    const { data, error } = await supabase
      .from('leads')
      .insert({
        page_slug: 'baralho-conarh-2026',
        nome:      name,
        email,
        whatsapp:  phone ?? null,
        metadata: {
          company,
          score,
          answers,
          event: event ?? 'CONARH 2026',
        },
      })
      .select('id')
      .single();

    if (error) throw error;

    return new Response(JSON.stringify({ success: true, id: data.id }), {
      status: 201,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (err) {
    console.error('save-lead error:', err);
    return new Response(JSON.stringify({ error: 'Erro interno ao salvar lead' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
