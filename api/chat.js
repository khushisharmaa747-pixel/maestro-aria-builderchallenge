export default async function handler(req, res) {
  // CORS headers so the HTML page can call this from any domain
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message, systemPrompt } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        max_tokens: 300,
        messages: [
          {
            role: 'system',
            content: systemPrompt || 'You are Aria, an ad intelligence assistant for Mosaic Wellness. Be specific, cite brands and numbers. Max 3 sentences. No bullet points.'
          },
          {
            role: 'user',
            content: message
          }
        ]
      })
    });

    if (!response.ok) {
      const err = await response.json();
      console.error('OpenAI error:', err);
      return res.status(502).json({ error: 'AI service error', reply: null });
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || null;

    return res.status(200).json({ reply });

  } catch (error) {
    console.error('Handler error:', error);
    return res.status(500).json({ error: 'Internal server error', reply: null });
  }
}
