import { Hono } from 'hono'
import { handle } from 'hono/vercel'

const app = new Hono().basePath('/api')

app.get('/', (c) => {
  return c.json({ message: "Congrats! You've deployed Hono to Vercel" })
})

app.get('/lotofacil', async (c) => {
  const response = await fetch('https://servicebus2.caixa.gov.br/portaldeloterias/api/lotofacil', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      // A API da Caixa pode exigir um header Referer, dependendo do CORS. Se necessário, adicione:
      // 'Referer': 'https://loterias.caixa.gov.br/'
    }
  });
  const data = await response.json();
  return c.json(data);
});

const handler = handle(app);

export const GET = handler;
export const POST = handler;
export const PATCH = handler;
export const PUT = handler;
export const OPTIONS = handler;